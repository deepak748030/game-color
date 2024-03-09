import React, { useState } from 'react';
import Layout from '../assets/components/Layout';
import Balancetwo from '../assets/components/Balancetwo';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Drawer = () => {
    const navigate = useNavigate();

    const btnData = [{ amount: 10 }, { amount: 20 }, { amount: 30 }, { amount: 40 }, { amount: 50 }, { amount: 100 }];
    const [betAmount, setbetAmount] = useState(0);
    const [drawer, setDrawer] = useState(false);

    const handleAmount = (amount) => {
        setbetAmount(betAmount + amount);
    };

    const handleBet = () => {
        // Perform any necessary actions before navigating
        // For example, you can send the bet amount to the backend
        // Then navigate to the '/game' route
        navigate('/game');
        // Close the drawer after navigating
        setDrawer(false);
    };

    return (
        <div className='px-2'>
            <div className='fw-bold mx-1' style={{ opacity: '.7' }}>
                Select Amount
            </div>
            <div className='bg-white rounded' style={{ width: '22rem' }}>
                <div className='p-3 ' style={{ position: 'relative' }}>
                    <input
                        className='px-5 fw-bold'
                        style={{ height: '3rem', borderRadius: '.8rem', opacity: '.6', border: '2px solid black' }}
                        type='text'
                        placeholder='Enter Amount'
                        value={betAmount}
                        onChange={(e) => {
                            const rs = Number(e.target.value);
                            setbetAmount(rs);
                            if (rs === Number) {
                                // Do something
                            }
                        }}
                    />
                    <div
                        className='d-flex justify-content-center align-items-center bg-danger fw-bolder'
                        style={{ height: '2rem', width: '2rem', borderRadius: '50%', color: 'aliceblue', fontSize: '1.2rem', position: 'absolute', top: '1.5rem', left: '1.6rem' }}
                    >
                        ₹
                    </div>
                </div>
                <div className='d-flex flex-wrap w-100 justify-content-center py-2 px-4' style={{ rowGap: '1rem', columnGap: '2rem' }}>
                    {btnData.map((btn) => (
                        <Button key={btn.amount} className='bg-white text-success' style={{ width: '40%', height: '3rem' }} onClick={() => handleAmount(btn.amount)}>
                            ₹ {btn.amount}
                        </Button>
                    ))}
                </div>
                <div className='d-flex justify-content-center'>
                    <Button className='btn my-3' onClick={handleBet} style={{ borderRadius: '3rem', width: '90%', height: '3.3rem' }}>
                        BET
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Drawer;
