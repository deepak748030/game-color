import React, { useState } from 'react'
import Layout from '../assets/components/Layout'
import { FaDatabase } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import Balancetwo from '../assets/components/Balancetwo';
const Invite = () => {

    const [copy, setCopy] = useState('copy code')
    const code = 'jDL231';
    const copyToClipborad = () => {
        navigator.clipboard.writeText(code);
        setCopy('copied')
    }

    return (
        <Layout title='INVITE-USERS'>
            <div className='mx-2'>
                <Balancetwo />
            </div>


            <div className='d-flex bg-white mx-2 px-1 py-3 my-2 
             text-orange align-items-center'>
                <FaDatabase className='rounded mx-2 p-2' style={{
                    backgroundColor: 'orange',
                    padding: ".31rem",
                    fontSize: '3rem',
                    opacity: '.7',

                }} />
                <div
                    className='px-1'
                    style={{
                        color: '#4C4646',
                        opacity: '.7',

                    }}>
                    <div>Referal Bonus</div>
                    <div className='fw-bold'>₹ 50</div>
                </div>
            </div>

            <div className='d-flex bg-white mx-2 px-1 py-3 my-2  
             text-orange align-items-center'>
                <FaUser className='rounded mx-2 px-3' style={{
                    backgroundColor: 'orange',
                    padding: ".31rem",
                    fontSize: '3rem',
                    opacity: '.7',

                }} />
                <div
                    className='px-1'
                    style={{
                        color: '#4C4646',
                        opacity: '.7',
                    }}>
                    <div>Total Referal Bonus</div>
                    <div className='fw-bold'>50</div>
                </div>
            </div>

            <div className='d-flex bg-white mx-2 px-1 py-3 my-2 
             text-orange align-items-center' style={{
                    maxWidth: '22rem'
                }}>
                <FaUserPlus className='rounded mx-2 p-3' style={{
                    backgroundColor: 'orange',
                    height: '3rem',
                    fontSize: '4rem',
                    opacity: '.7',

                }} />
                <div
                    className='px-1'
                    style={{
                        color: '#4C4646',
                        opacity: '.7',
                        letterSpacing: '.3px',
                    }}>
                    <div className='fw-bold'>Refer Friends</div>
                    <div className='d-flex flex-wrap-nowrap' style={{
                        width: '80%',
                        fontSize: '.7rem'
                    }}>Get ₹50 Every New Sign-up And Get ₹100
                        when your friend activates their </div>
                </div>
            </div>

            {/* referal code section  */}

            <div className='d-flex justify-content-between bg-white mx-2 px-3 py-2'>
                <div>
                    <div style={{
                        fontSize: '.8rem',
                        opacity: '.6'
                    }}>Your Referral code </div>
                    <div className='fw-bold'>jDL231</div>
                </div>
                <div className='text-primary d-flex align-items-center cursor-pointer ' style={{
                    color: 'aliceblue',
                    fontSize: '.9rem'
                }}
                    onClick={copyToClipborad}
                >
                    <FaCopy />
                    <span style={{ cursor: 'pointer' }}>

                        {copy}
                    </span>
                </div>
            </div>



        </Layout>
    )
}

export default Invite