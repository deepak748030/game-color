import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useAuth } from '../hooks/AuthContext';
import { useNavigate } from 'react-router-dom'

// Styled components for the login page
const LoginContainer = styled.div`
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    padding: 20px;
    width: 300px;
    margin: 0 auto;

    h2 {
        margin-bottom: 20px;
    }
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

const AdditionalOptions = styled.div`
    margin-top: 10px;
    font-size: 14px;

    a {
        color: #007bff;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const LoginPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const { data } = await axios.post('http://localhost:3000/api/v1/auth/login', {
                phoneNumber,
                password
            });
            if (data?.success === true) {
                await login(`data`);
                console.log(data)
                setPhoneNumber('');
                setPassword('')
                navigate('/')
            }
        } catch (error) {
            console.error(error);

        }
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh'

        }}>
            <LoginContainer>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
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
                        <Button type="submit">Login</Button>
                    </FormGroup>
                </form>
                <AdditionalOptions>
                    <a href="#" className="forgot-password">Forgot Password?</a>
                    <span> | </span>
                    <a href="#" className="create-account">Create Account</a>
                </AdditionalOptions>
            </LoginContainer>
        </div>
    );
}

export default LoginPage;