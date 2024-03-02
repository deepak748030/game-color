import React from 'react'

const Header = () => {
    return (
        <div className=' d-flex align-content-start 
        justify-content-between' >
            <div style={{
                backgroundColor: 'green',
                padding: '1rem 2rem'
            }}>GREEN</div>
            <div className='bg-success  px-4 rounded-1' >VOILET</div>
            <div className='bg-success px-4 rounded-1 bg-danger'>RED </div>


        </div>
    )
}

export default Header