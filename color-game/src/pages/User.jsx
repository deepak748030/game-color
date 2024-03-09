import React from 'react'
import Layout from '../assets/components/Layout'
import Balance from '../assets/components/Balance'
import { FaUser } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdNotificationsActive } from "react-icons/md";
import { RiWallet3Fill } from "react-icons/ri";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import '../App.css'


const User = () => {
    return (
        <Layout title='USER' >

            <div className='mx-2'>
                <Balance />
            </div>

            <div className='my-4'>
                <Link className='bg d-flex justify-content-between p-3 m-2 align-items-center ' >
                    <div className='d-flex align-items-center'>
                        <FaUser className='mx-2' />
                        Profile
                    </div>
                    <FaAngleRight />
                </Link>
                <Link className='bg d-flex justify-content-between p-3 m-2 align-items-center ' >
                    <div className='d-flex align-items-center'>
                        <MdNotificationsActive className='mx-2' />
                        Notification
                    </div>
                    <FaAngleRight />
                </Link>
                <Link className='bg d-flex justify-content-between p-3 m-2 align-items-center ' >
                    <div className='d-flex align-items-center'>
                        <RiWallet3Fill className='mx-2' />
                        Walet
                    </div>
                    <FaAngleRight />
                </Link>
                <Link className='bg d-flex justify-content-between p-3 m-2 align-items-center ' >
                    <div className='d-flex align-items-center'>
                        <FaUser className='mx-2' />
                        Bank
                    </div>
                    <FaAngleRight />
                </Link>
                <Link className='bg d-flex justify-content-between p-3 m-2 align-items-center ' >
                    <div className='d-flex align-items-center'>
                        <BiMoneyWithdraw className='mx-2' />
                        Withdraw
                    </div>
                    <FaAngleRight />
                </Link>
                <Link className='bg d-flex justify-content-between p-3 m-2 align-items-center ' >
                    <div className='d-flex align-items-center'>
                        <FaUserFriends className='mx-2' />
                        Refer & Earn
                    </div>
                    <FaAngleRight />
                </Link>



            </div>

            <div>
                <Link className='bg d-flex justify-content-between p-3 m-2 align-items-center ' >
                    <div className='d-flex align-items-center'>
                        <FaBookReader className='mx-2' />
                        Terms & Condition
                    </div>
                    <FaAngleRight />
                </Link>
                <Link className='bg d-flex justify-content-between p-3 m-2 align-items-center ' >
                    <div className='d-flex align-items-center'>
                        <SiGnuprivacyguard className='mx-2' />
                        Privacy Policy
                    </div>
                    <FaAngleRight />
                </Link>
            </div>

        </Layout>
    )
}

export default User