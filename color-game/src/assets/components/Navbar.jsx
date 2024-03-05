import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import { TiUserAdd } from "react-icons/ti";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
    return (
        <div
            style={{ position: 'absolute', bottom: '0', width: '100%', backgroundColor: 'aliceblue' }}
        >
            <div className='d-flex justify-content-between px-2 py-1 rounded'
                style={{ fontWeight: '500' }}
            >
                <div className='d-flex align-items-center px-2 py-1 rounded' style={{ flexDirection: 'column' }}>
                    <div> <IoMdHome style={{ fontSize: '1.5rem' }} /> </div>
                    <div>  Home</div>
                </div>
                <div className='d-flex align-items-center px-2 py-1 rounded' style={{ flexDirection: 'column' }}>
                    <div> <IoWallet style={{ fontSize: '1.5rem' }} /> </div>
                    <div>  Recharge</div>
                </div>

                <div className='d-flex align-items-center px-2 py-1 rounded' style={{ flexDirection: 'column' }}>
                    <div> <TiUserAdd style={{ fontSize: '1.5rem' }} /> </div>
                    <div>  Invite</div>
                </div>

                <div className='d-flex align-items-center px-2 py-1 rounded' style={{ flexDirection: 'column' }}>
                    <div> <FaUser style={{ fontSize: '1.5rem' }} /> </div>
                    <div> Account </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar