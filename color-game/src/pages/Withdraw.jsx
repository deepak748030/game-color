import React from 'react'
import Layout from '../assets/components/Layout'
import Balance from '../assets/components/Balance'

const Withdraw = () => {
    return (
        <Layout title='Withdraw'>
            <div className='px-2'>
                <Balance />
                <div className='fw-bold mx-1' style={{
                    opacity: '.5'
                }} >Amount</div>

                <div className='bg-white rounded' style={{
                    minHeight: '8rem',
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
                        }} type='text' placeholder='Enter Amount'></input>
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
                    <div className='d-flex justify-content-center' style={{
                        opacity: '.7',
                        fontSize: '.9rem',
                        flexWrap: 'nowrap',
                        // backgroundColor: 'red',
                        width: '60%',
                        lineHeight: ".9rem",
                        marginLeft: '2rem',
                        marginTop: '-.5rem'

                    }} >
                        <div >*withdraw Amount should be equal or more then ₹ 100</div>
                    </div>
                </div>
















            </div>
        </Layout>
    )
}

export default Withdraw