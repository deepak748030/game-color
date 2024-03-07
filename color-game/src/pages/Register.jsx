import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';

const apiUrl = import.meta.env.VITE_API_URL;
console.log(apiUrl)
const RegisterContainer = styled.div`
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    padding: 20px;
    width: 300px;
    margin: 0 auto;
`;

const FormGroup = styled.div`
    margin-bottom: 20px;
`;

const Label = styled.label`
    display: block;
    font-weight: bold;
`;

const Input = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 5px;
`;

const Button = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;

    &:hover {
        background-color: #45a049;
    }
`;

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${apiUrl}/auth/register`, {
                username,
                phoneNumber,
                password
            });
            if (response.data) {
                toast.success(res.data.message)
            } else {
                toast.error(res.data.error)
            }
        } catch (error) {
            console.error(error);
            toast.error(res.data.message)
        }
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh'

        }} >
            <RegisterContainer>
                <ToastContainer />
                <h2>Create Account</h2>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="username">Username</Label>
                        <Input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <Input
                            type="tel"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit">Register</Button>
                    </FormGroup>
                </form>
            </RegisterContainer>
        </div>
    );
}

export default RegisterPage;