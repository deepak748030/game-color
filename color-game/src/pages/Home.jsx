import React from 'react'
import { useAuth } from '../hooks/AuthContext'
import Layout from '../assets/components/Layout';
import Balance from '../assets/components/Balance';
import { FaStopwatch } from "react-icons/fa6";

const Home = () => {

    const { auth } = useAuth();
    console.log(auth)
    return (
        <Layout title='HOME'>

            <div style={{
                // overflowY: 'scroll',
                // marginBottom: '4rem'
            }}>

                <div className='mx-2 rounded p-1 my-2 rounded'
                    style={{
                        minHeight: '12rem',
                        backgroundColor: 'white'
                    }}
                >
                    <div classname=" bg-danger">
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

                <diV className="mx-2">
                    <Balance />
                </diV>


                <div
                    className='my-1 mx-3'
                    style={{
                        fontWeight: 'bold',
                        opacity: '.7'
                    }}
                >Recent Game</div>


                <div className='mx-3 d-flex justify-content-between' style={{
                    flexWrap: 'wrap',

                }} >
                    <div
                        className='rounded p-1 my-2'
                        style={{
                            width: '48%',
                            backgroundColor: 'white',
                            border: '.1px solid black',

                        }} >
                        <div
                            style={{
                                minHeight: '6rem',
                                // backgroundColor: 'purple',
                                position: 'relative'
                            }}>
                            <img alt='not found' ></img>
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
                    </div>
                    <div
                        className='rounded p-1 my-2'
                        style={{
                            width: '48%',
                            backgroundColor: 'white',
                            border: '.1px solid black',

                        }} >
                        <div
                            style={{
                                minHeight: '6rem',
                                // backgroundColor: 'purple',
                                position: 'relative'
                            }}>
                            <img alt='not found' ></img>
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
                    </div>

                    <div
                        className='rounded p-1 my-2'
                        style={{
                            width: '48%',
                            backgroundColor: 'white',
                            border: '.1px solid black',

                        }} >
                        <div
                            style={{
                                minHeight: '6rem',
                                // backgroundColor: 'purple',
                                position: 'relative'
                            }}>
                            <img alt='not found' ></img>
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
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default Home