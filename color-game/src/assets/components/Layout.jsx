import React from 'react'
import Header from './Header'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div style={{
            display: 'flex',
            background: '#F5F5FF',
            // border: '.1px solid black',
            minWidth: '21rem',
            minHeight: '100vh',
            borderRadius: '1rem',
            color: '#262626'
        }}>
            <div style={{ position: 'relative' }} >

                <Header />
                {children}
                <Navbar />



            </div>
        </div>
    )
}

export default Layout