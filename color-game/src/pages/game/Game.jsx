import React from 'react'
import { CiBank } from "react-icons/ci";
import { Button } from 'react-bootstrap';
import Header from '../../assets/components/Header';
import { FaStopwatch } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";

const Game = () => {
    return (

        <div style={{
            display: 'flex',
            background: 'aliceblue',
            // border: '2px solid black',
            minWidth: '21rem',
            minHeight: '100vh',
            borderRadius: '1rem'
        }}>
            <div>
                <Header />

                <div className='mx-2'>

                    <div className='d-flex' style={{
                        backgroundColor: 'white',
                        margin: '.7rem 0',
                        height: '9rem',
                        borderRadius: '.8rem',
                        flexDirection: 'column',
                        gap: '1rem',
                        padding: '1.2rem'
                    }}  >
                        <div className='d-flex '>
                            <div className='d-flex ' style={{
                                gap: '1rem'
                            }} >
                                <div className='d-flex p-2' style={{
                                    backgroundColor: 'aliceblue',
                                    height: '3.8rem',
                                    borderRadius: '.5rem'
                                }} >
                                    <CiBank style={{
                                        fontSize: '2.7rem'
                                    }} />
                                </div>
                                <div style={{
                                    // backgroundColor: 'red',
                                    height: '3.8rem',

                                }} >
                                    <p style={{
                                        fontWeight: 'bold',
                                        letterSpacing: '.3px',
                                    }} >Available Balance</p>
                                    <h3 style={{
                                        margin: '-.8rem 0'
                                    }}>
                                        Rs.2,902.54
                                    </h3>
                                </div>
                            </div>
                        </div>


                        <Button style={{
                            letterSpacing: '1px'
                        }}>Withdraw</Button>


                    </div>

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
                            }}>20211213003</h3>
                        </div>
                        <div>
                            <div>Count Down</div>
                            <div className='d-flex align-items-center' style={{
                                gap: '.2rem',
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                lineHeight: '2rem'
                            }}>
                                <FaStopwatch />
                                00:28
                            </div>

                        </div>
                    </div>
                    {/* color prediction button */}

                    <div className='d-flex p-1 px-3 bg-white my-2 justify-content-between rounded '>
                        <button >Green</button>
                        <button>Violet</button>
                        <button>Red</button>
                    </div>

                    {/* Records Parity */}

                    <div className='d-flex bg-white rounded' style={{
                        cursor: 'pointer'
                    }}  >
                        <div className='w-50 border py-2 d-flex justify-content-center '>Parity Records</div>
                        <div className='w-50 border py-2 d-flex justify-content-center'>My Records</div>
                        <div className='w-50 border py-2 d-flex justify-content-center'>Winners</div>
                    </div>


                    <div className='d-flex justify-content-between my-2 fw-bold '>
                        <div>Parity Record</div>
                        <div className='d-flex gap-1'>
                            <div>
                                <FaQuestionCircle />
                            </div>
                            <div>Rules</div>
                        </div>
                    </div>

                    {/* records listes */}
                    <div className='d-flex justify-content-between fw-bold bg-white px-2 py-2 rounded '>
                        <div>Period</div>
                        <div>Result</div>
                        <div>Price</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Game