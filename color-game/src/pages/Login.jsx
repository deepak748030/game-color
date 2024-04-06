import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IoIosCall } from 'react-icons/io';
import { FaKey } from 'react-icons/fa';
const apiUrl = import.meta.env.VITE_API_URL;

const LoginPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`${apiUrl}/auth/login`, {
                phoneNumber,
                password
            });
            if (data) {
                await login(data);
                toast.success(data.message);
                setPhoneNumber('');
                setPassword('');
                navigate('/');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='text-center mb-5'>
                <h3 >Login Now</h3>
                <div>Please enter details below to continue</div>
            </div>
            <div className='d-flex justify-content-center align-items-center flex-column gap-4  '>
                <div className='d-flex bg-red gap-2 border border-primary p-2 rounded'>
                    <div
                        className='p-2 rounded-circle d-flex align-items-center justify-content-center'
                        style={{
                            backgroundColor: 'blue',
                            color: 'white',
                            fontSize: '1.2rem'

                        }}>
                        <IoIosCall />
                    </div>
                    <input
                        type='text'
                        pattern="[0-9]*"
                        inputmode="numeric"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder='Enter Mobile No.'
                        maxLength="10"
                        className='px-2 bg-white border-0 outline-0 fs-5'
                        style={{
                            outline: 'none',
                            fontSize: "1.5rem"
                        }}
                    />
                </div>
                <div className='d-flex bg-red gap-2 border border-primary p-2 rounded'>
                    <div
                        className='p-2 rounded-circle d-flex align-items-center justify-content-center'
                        style={{
                            backgroundColor: 'purple',
                            color: 'white',
                            fontSize: '1.2rem'

                        }}>
                        <FaKey />
                    </div>
                    <input
                        type='password'
                        placeholder='Enter Password'
                        maxLength="20"
                        className='px-2 bg-white border-0 outline-0 fs-5'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            outline: 'none'
                        }}
                    />
                </div>
            </div>
            <div className='d-flex justify-content-end my-3'
                onClick={() => { navigate('/forgot-password') }}
                style={{
                    color: 'blue',
                    fontWeight: 'bolder',
                    cursor: 'pointer'
                }}
            >
                Forget Password
            </div>
            <button className="btn btn-primary w-100 py-3 my-2" type="submit"
                style={{ letterSpacing: '1px', fontWeight: 'bolder', fontSize: '1.1rem' }}>
                Login
            </button>
            <div className='text-center mt-4'>
                Don't have an account? <span onClick={() => { navigate('/register') }} style={{
                    color: 'blue',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}>
                    Register</span>
            </div>






        </form>
    );
}

export default LoginPage;
