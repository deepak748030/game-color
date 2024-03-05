import React from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { RiNotification4Fill } from "react-icons/ri";

const Header = () => {
    return (
        <header style={{
            display: 'flex',
            justifyContent: "space-between",
            padding: '1rem ',
            // border: '1px solid red',
            width: '23rem',
            alignItems: 'center',
            fontSize: '1.3rem',
            fontWeight: 'bolder',
            backgroundColor: 'white',
            borderRadius: '.3rem'
        }}>
            <div style={{
                backgroundColor: 'aliceblue',
                alignItems: 'center',
                padding: '.4rem ',
                display: 'flex', borderRadius: '.5rem',


            }} >
                <FaAngleLeft />
            </div>

            FAST PARITY
            <div className='d-flex align-items-center ' >
                <RiNotification4Fill />
                <div style={{
                    width: '2rem',
                    height: '2rem',
                    border: '1px solid black',
                    borderRadius: ".6rem",
                    marginLeft: '.5rem'


                }} ></div>
            </div>

        </header>
    )
}

export default Header