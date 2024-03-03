import React from 'react'
import { useAuth } from '../hooks/AuthContext'
const Home = () => {

    const { auth } = useAuth();
    console.log(auth)
    return (
        <div>Home</div>
    )
}

export default Home