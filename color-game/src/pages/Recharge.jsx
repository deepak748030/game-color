import React, { useState } from 'react'
import Layout from '../assets/components/Layout'
import Balancetwo from '../assets/components/Balancetwo'
import { Button } from 'react-bootstrap'

const Recharge = () => {

    const btnData = [{ amount: 100 }, { amount: 200 }, { amount: 300 }, { amount: 400 }, { amount: 500 }, { amount: 1000 },]
    const [rechargeAmount, setRechargeAmount] = useState(0)

    const handleAmount = (amount) => {
        setRechargeAmount(rechargeAmount + amount)
    }

    return (
        <Layout>
            <div className='px-2'>
                <Balancetwo />
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
                            value={rechargeAmount}
                        // onChange={(e) => setRechargeAmount(e.target.value)}
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
                                onClick={() => handleAmount(btn.amount)}
                            >₹ {btn.amount}</Button>
                        ))}


                    </div>
                    <div className='d-flex justify-content-center'>
                        <Button className='btn my-3' style={{
                            borderRadius: '3rem',
                            width: '90%',
                            height: '3.3rem'
                        }}>Recharge</Button>
                    </div>

                </div>

            </div>
        </Layout>
    )
}

export default Recharge