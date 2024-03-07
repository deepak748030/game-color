import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import { TiUserAdd } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div
            style={{ position: 'absolute', bottom: '0', width: '100%', backgroundColor: 'aliceblue' }}
        >
            <div className='d-flex justify-content-between px-2 py-1 rounded'
                style={{ fontWeight: '500' }}
            >
                <div className='d-flex align-items-center px-2 py-1 rounded' style={{ flexDirection: 'column' }}>
                    <NavLink to={'/'} className='px-2 rounded pb-1' > <IoMdHome style={{ fontSize: '1.5rem' }} /> </NavLink>
                    <div>  Home</div>
                </div>
                <div className='d-flex align-items-center px-2 py-1 rounded' style={{ flexDirection: 'column' }}>
                    <NavLink to={'/recharge'} className='px-2 rounded pb-1' > <IoWallet style={{ fontSize: '1.5rem' }} /> </NavLink>
                    <div>  Recharge</div>
                </div>

                <div className='d-flex align-items-center px-2 py-1 rounded' style={{ flexDirection: 'column' }}>
                    <NavLink to={'/invite'} className='px-2 rounded pb-1' > <TiUserAdd style={{ fontSize: '1.5rem' }} /> </NavLink>
                    <div>  Invite</div>
                </div>

                <div className='d-flex align-items-center px-2 py-1 rounded' style={{ flexDirection: 'column' }}>
                    <NavLink to={'/user'} className='px-2 rounded pb-1' > <FaUser style={{ fontSize: '1.5rem' }} /> </NavLink>
                    <div> Account </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar