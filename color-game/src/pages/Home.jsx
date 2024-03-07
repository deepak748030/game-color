import React from 'react'
import { useAuth } from '../hooks/AuthContext'
import Layout from '../assets/components/Layout';
const Home = () => {

    const { auth } = useAuth();
    console.log(auth)
    return (
        <Layout>
            <div>Home</div>
        </Layout>
    )
}

export default Home