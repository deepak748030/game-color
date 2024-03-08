import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import { ToastContainer } from 'react-toastify';
import { Helmet } from "react-helmet";

const Layout = ({ children, title = 'COLOUR-GAME' }) => {
    return (
        <div style={{
            display: 'flex',
            background: '#E5F3FF',
            // border: '.1px solid black',
            minWidth: '21rem',
            minHeight: '100vh',
            borderRadius: '1rem',
            color: '#262626'
        }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>

            <div style={{ position: 'relative' }} >
                <ToastContainer />
                <Header />
                {children}
                <Navbar />



            </div>
        </div>
    )
}

export default Layout