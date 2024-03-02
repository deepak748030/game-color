import React from 'react'
import Header from '../../assets/components/Header'
import { Container } from 'react-bootstrap'
const Game = () => {
    return (

        <>
            <Container className='rounded-3 d-flex justify-content-center' style={{
                backgroundColor: 'aliceblue',
                width: '25rem',
                // height: '100vh'
            }} >
                <Header />

            </Container>
        </>
    )
}

export default Game