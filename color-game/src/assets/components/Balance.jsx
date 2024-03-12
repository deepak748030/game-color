import React, { useEffect, useState } from 'react'
import { CiBank } from "react-icons/ci";
import createSocketConnection from '../../hooks/Socket';
const Balance = ({ children }) => {


    const [walletBalance, setWalletBalance] = useState(0);

    useEffect(() => {

        createSocketConnection((socket) => {
            socket.on('walletBalanceUpdate', ({ userId, newBalance }) => {
                // Update wallet balance for the specific user
                if (userId === currentUser.id) {
                    setWalletBalance(newBalance);
                }
            });
        });
    }, []);




    return (

        <div className='d-flex' style={{
            backgroundColor: 'white',
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            margin: '.7rem 0',
            // height: '9rem',
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
                            color: 'blue'
                        }} >Available Balance</p>
                        <h3 style={{
                            margin: '-.8rem 0'
                        }}>
                            Rs.{walletBalance}
                        </h3>
                    </div>
                </div>
            </div>
            {children}


        </div>
    )
}

export default Balance