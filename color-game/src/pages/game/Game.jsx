import React, { useEffect, useState } from 'react'
import { FaStopwatch } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import Layout from '../../assets/components/Layout';
import Balanceone from '../../assets/components/Balanceone';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import socket from '../../hooks/Socket';
import axios from 'axios'
const apiUrl = import.meta.env.VITE_API_URL;
import { useAuth } from '../../hooks/AuthContext'; // Updated import
import UserRecords from '../../assets/components/UserRecords';
import Records from '../../assets/components/Records';


const Game = () => {

    const { auth } = useAuth();
    // console.log(auth)
    const [recordsNav, setRecordsNAv] = useState(0)

    const [color, setcolor] = useState('')
    const [drawer, setDrawer] = useState(false)
    const [countdown, setCountdown] = useState({ minutes: 2, seconds: 0 });
    const [countperiod, setCountPeriod] = useState(1)
    const [betAmount, setbetAmount] = useState(0)


    const handleBet = async () => {
        try {

            const userId = auth?.user?._id;
            console.log(userId)
            const res = await axios.post(`${apiUrl}/bet/${userId}`, {
                color,
                betAmount
            })
            const data_id = { _id: userId }
            socket.emit('userBalance', data_id)

        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        // Event listener for 'countdown' event
        const countdownListener = (data) => {
            setCountdown(data);
        };

        // Event listener for 'countPeriods' event
        const countPeriodsListener = (data) => {
            // console.log(data)
            setCountPeriod(data);
        };

        // Add event listeners when the component mounts
        socket.on('countdown', countdownListener);
        socket.on('countPeriods', countPeriodsListener);

        // Clean up event listeners when the component unmounts
        return () => {
            socket.off('countdown', countdownListener);
            socket.off('countPeriods', countPeriodsListener);
        };
    }, []); // Empty dependency array ensures that this effect runs only once, similar to componentDidMount





    //color drawer
    const navigate = useNavigate()

    const btnData = [{ amount: 10 }, { amount: 20 }, { amount: 30 }, { amount: 40 }, { amount: 50 }, { amount: 100 },]

    const handleAmount = (amount) => {
        setbetAmount(betAmount + amount)
    }

    return (


        <Layout title='FAST-PARITY' >


            <div className='mx-2 ' style={{
                position: 'relative',

            }}>

                {drawer ? (
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '90vh',
                        backgroundColor: 'white',
                        overflow: 'hidden'
                    }}>
                        <div className='px-2'>

                            <div className='fw-bold mx-1' style={{
                                opacity: '.7'
                            }} >Select Amount</div>

                            <div className='bg-white rounded' style={{
                                // minHeight: '5rem',
                                width: '22rem'
                            }} >
                                <div className='p-3 ' style={{
                                    position: 'relative'
                                }}>
                                    <input className='px-5 fw-bold' style={{
                                        height: '3rem',
                                        borderRadius: '.8rem',
                                        opacity: '.6',
                                        border: '2px solid black'
                                    }} type='text' placeholder='Enter Amount'
                                        value={betAmount}
                                        onChange={(e) => {
                                            const rs = Number(e.target.value);
                                            setbetAmount(rs)
                                            if (rs == Number) {
                                            }
                                        }}
                                    ></input>
                                    <div className='d-flex justify-content-center
            align-items-center bg-danger fw-bolder' style={{
                                            height: '2rem',
                                            width: '2rem',
                                            borderRadius: '50%',
                                            color: 'aliceblue',
                                            fontSize: '1.2rem',
                                            position: 'absolute',
                                            top: '1.5rem',
                                            left: '1.6rem',


                                        }}>₹</div>

                                </div>

                                <div className='d-flex flex-wrap w-100 justify-content-center py-2
        px-4'
                                    style={{
                                        rowGap: '1rem',
                                        columnGap: '2rem'
                                    }}
                                >
                                    {btnData.map((btn) => (
                                        <Button key={btn.amount} className='bg-white text-success' style={{
                                            width: '40%',
                                            height: '3rem'
                                        }}
                                            onClick={() => {
                                                handleAmount(btn.amount);

                                            }}
                                        >₹ {btn.amount}</Button>
                                    ))}


                                </div>
                                <div className='d-flex justify-content-center'>
                                    <Button className='btn my-3' onClick={() => {
                                        setDrawer(false);
                                        handleBet();
                                    }} style={{
                                        borderRadius: '3rem',
                                        width: '90%',
                                        height: '3.3rem'
                                    }}>BET</Button>
                                </div>

                            </div>

                        </div>
                    </div>
                ) : ''}

                {/* balance section  */}
                <Balanceone />



                <div className='d-flex justify-content-between ' style={{
                    backgroundColor: 'white',
                    padding: '.6rem 1rem',
                    borderRadius: '.5rem',
                    height: '4rem',
                }}>
                    <div>
                        <p >Period</p>
                        <h3 style={{
                            margin: ' -1rem 0'
                        }}>000{countperiod}</h3>
                    </div>
                    <div>
                        <div>Count Down</div>
                        <div className='d-flex align-items-center' style={{
                            gap: '.2rem',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            lineHeight: '2rem',
                            color: 'blue'
                        }}>
                            <FaStopwatch style={{ color: 'blue' }} />
                            {countdown.minutes}:{countdown.seconds < 10 ? `0${countdown.seconds}` : countdown.seconds}

                        </div>

                    </div>
                </div>
                {/* color prediction button */}

                <div className='d-flex p-3 px-3 bg-white my-3 justify-content-between rounded '>
                    <button style={{ backgroundColor: '#E9FCE9', color: 'green' }} onClick={() => { setcolor("green"); setDrawer(true) }}  >Green</button>
                    <button style={{ backgroundColor: '#FEF6FE', color: 'voilet' }} onClick={() => { setcolor("voilet"); setDrawer(true) }} >Violet</button>
                    <button style={{ backgroundColor: '#FFF5F5', color: 'red' }} onClick={() => { setcolor("red"); setDrawer(true) }} >Red</button>
                </div>

                {/* Records Parity */}

                <div className='d-flex bg-white rounded' style={{
                    cursor: 'pointer'
                }}  >
                    <div
                        className='w-50 border py-2 d-flex justify-content-center rounded '
                        style={recordsNav === 0 ? { backgroundColor: '#3333FF', color: 'aliceblue' } : {}}

                        onClick={() => setRecordsNAv(0)}>
                        Parity Records</div>
                    <div className='w-50 border py-2 d-flex justify-content-center rounded'
                        onClick={() => setRecordsNAv(1)}
                        style={recordsNav === 1 ? { backgroundColor: '#3333FF', color: 'aliceblue' } : {}}

                    >My Records</div>
                    <div className='w-50 border py-2 d-flex justify-content-center rounded'
                        onClick={() => setRecordsNAv(2)}
                        style={recordsNav === 2 ? { backgroundColor: '#3333FF', color: 'aliceblue' } : {}}
                    >Winners</div>
                </div>


                <div className='d-flex justify-content-between my-2 fw-bold '

                >
                    <div>Parity Record</div>
                    <div className='d-flex gap-1'>
                        <div>
                            <FaQuestionCircle />
                        </div>
                        <div>Rules</div>
                    </div>
                </div>

                {/* records listes */}

                {recordsNav == 0 ? (<Records />) : (<UserRecords />)}




            </div>


        </Layout>



    )
}

export default Game