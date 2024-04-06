import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { IoIosCall } from 'react-icons/io';
import { FaKey } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_URL;

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [referralCode, setReferralCode] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const navigate = useNavigate();

    const sendOtp = async () => {
        try {
            const response = await axios.post(`${apiUrl}/auth/send-otp`, {
                phoneNumber
            });
            if (response?.data) {
                toast.success('OTP sent successfully');
                setOtpSent(true);
            }
        } catch (error) {
            console.error(error);
            toast.error('Failed to send OTP');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${apiUrl}/auth/register`, {
                username,
                phoneNumber,
                password,
                referralCode,
                otp
            });
            if (response?.data) {
                toast.success(response.data.message);
                navigate('/login')
            } else {
                toast.error(response.data.error);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message);
        }
    };

    return (
        <>
            <div className='text-center mb-5'>
                <h3>Register Now</h3>
                <div>Please enter details below to continue</div>
            </div>
            <div className='d-flex justify-content-center align-items-center flex-column gap-3'>
                {/* Username Field */}
                <div className='d-flex bg-red gap-2 border border-primary p-2 px-4 rounded'>
                    <div
                        className='p-2 rounded-circle d-flex align-items-center justify-content-center'
                        style={{
                            backgroundColor: 'green',
                            color: 'white',
                            fontSize: '1.2rem'
                        }}>
                        <FaKey />
                    </div>
                    <input
                        type='text'
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='px-3 bg-white border-0 outline-0 fs-6'
                        style={{
                            outline: 'none'
                        }}
                    />
                </div>
                {/* Phone Number Field */}
                <div className='d-flex bg-red gap-2 border border-primary p-2 px-4 rounded'>
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
                        className='px-3 bg-white border-0 outline-0 fs-6'
                        style={{
                            outline: 'none',
                            fontSize: '1.5rem'
                        }}
                    />
                </div>
                {/* Password Field */}
                <div className='d-flex bg-red gap-2 border border-primary p-2 px-4 rounded'>
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
                        className='px-3 bg-white border-0 outline-0 fs-6'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            outline: 'none'
                        }}
                    />
                </div>
                {/* Confirm Password Field */}
                <div className='d-flex bg-red gap-2 border border-primary p-2 px-4 rounded'>
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
                        placeholder='Confirm Password'
                        maxLength="20"
                        className='px-3 bg-white border-0 outline-0 fs-6'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        style={{
                            outline: 'none'
                        }}
                    />
                </div>
                {/* Referral Code Field */}
                <div className='d-flex bg-red gap-2 border border-primary p-2 px-4 rounded'>
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
                        type='text'
                        placeholder='Referral Code (Optional)'
                        maxLength="20"
                        className='px-3 bg-white border-0 outline-0 fs-6'
                        value={referralCode}
                        onChange={(e) => setReferralCode(e.target.value)}
                        style={{
                            outline: 'none'
                        }}
                    />
                </div>
            </div>



            <div className='d-flex justify-content-between align-items-center gap-2 mt-3'>
                <div className='d-flex bg-red gap-2 border border-primary p-2 px-4 rounded'>
                    <input
                        type='text'
                        placeholder='Enter OTP'
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className='bg-white border-0 outline-0 fs-6'
                        style={{
                            outline: 'none',
                            width: "5rem"
                        }}
                    />
                </div>
                {!otpSent && (
                    <button
                        className="btn btn-primary"
                        onClick={sendOtp}
                    >
                        Send OTP
                    </button>
                )}
            </div>

            <button
                className="btn btn-primary w-100 py-3 mt-4 "
                onClick={handleSubmit}
                style={{
                    letterSpacing: '2px'
                }}>
                Register
            </button>
            <div className='text-center mt-4'>
                Already have an account?{' '}
                <span
                    onClick={() => navigate('/login')}
                    style={{
                        color: 'blue',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}>
                    Login
                </span>
            </div>
        </>
    );
};

export default RegisterPage;
