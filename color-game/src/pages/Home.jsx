import React from 'react'
import { useAuth } from '../hooks/AuthContext'
import Layout from '../assets/components/Layout';
import Balancetwo from '../assets/components/Balancetwo';
import { FaStopwatch } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Home = () => {

    const { auth } = useAuth();
    // console.log(auth)
    return (
        <Layout title='HOME'>

            <div>

                <div className='mx-2 rounded p-1 my-2 rounded'
                    style={{
                        minHeight: '12rem',
                        backgroundColor: 'white'
                    }}
                >
                    <div className=" bg-danger">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="..." alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="..." alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="..." alt="Third slide" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* slider ended  */}

                <div className="mx-2">
                    <Balancetwo />
                </div>


                <div
                    className='my-1 mx-4'
                    style={{
                        fontWeight: 'bold',
                        opacity: '.7'
                    }}
                >Recent Game</div>


                <div className='mx-3 d-flex justify-content-between' style={{
                    flexWrap: 'wrap',

                }} >
                    <Link to={'game'}
                        className='rounded p-1 my-2'
                        style={{
                            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                            width: '48%',
                            backgroundColor: 'white',
                            // border: '.1px solid black',

                        }} >
                        <div
                            className='d-flex justify-content-center'
                            style={{
                                minHeight: '6rem',
                                // position: 'relative'
                            }}>
                            <img src='fast_parity.jpg' alt='not found' style={{
                                height: '7rem',
                                width: '100%',
                                borderRadius: '.2rem'
                            }} ></img>
                        </div>
                        <div className='d-flex 
                     align-items-center gap-2 py-1
                     justify-content-center fw-bold '
                            style={{
                                opacity: '.7'
                            }}
                        >
                            <FaStopwatch
                                style={{
                                    paddingBottom: '.1rem',
                                    fontSize: '1.3rem'

                                }} />

                            <div style={{
                                color: 'blue'
                            }} > 30 SEC</div>
                        </div>
                    </Link>

                </div>
            </div>
        </Layout>
    )
}

export default Home