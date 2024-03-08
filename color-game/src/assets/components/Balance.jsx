import React from 'react'
import { CiBank } from "react-icons/ci";
import { Button } from 'react-bootstrap';
const Balance = () => {
    return (

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
                            color: 'blue'
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
    )
}

export default Balance