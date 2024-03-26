import React, { useEffect, useState } from 'react'
import socket from '../../hooks/Socket'
const UserRecords = () => {

    const [userData, setUserData] = useState([])
    const handleUserRecords = (data) => {
        setUserData(data)
        console.log(data)
    }


    useEffect((() => {
        socket.on('userRecords', handleUserRecords)

        return () => (socket.off('userRecords', handleUserRecords))
    }), [socket])


    return (






        <div>
            <div className='d-flex justify-content-between fw-bold bg-white px-2 py-2 rounded '>
                <div>Period</div>
                <div>Result</div>
                <div>Price</div>
            </div>
            {userData.map((data) => (


                <div className='rounded py-2 my-1' key={data._id} style={{
                    display: 'grid', gridTemplateColumns: 'auto auto auto', justifyContent: 'space-between',
                    padding: ' .4rem .7rem', backgroundColor: '#E5E5FF',
                    fontWeight: '500',
                }} >

                    <div  >20211213003</div>
                    <div style={{
                        height: '1.5rem', width: '1.5rem',
                        backgroundColor: '#006600', borderRadius: '50%',
                        marginLeft: '-2rem'
                    }} >{data.color}</div>
                    <div>{data.betAmount}</div>

                </div>
            ))}



        </div>
    )
}

export default UserRecords