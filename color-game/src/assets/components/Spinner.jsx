import React, { useState, useEffect } from "react";
import "./Spinner.css"; // Import the CSS file for styling
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";

const Spinner = () => {
    const [count, setCount] = useState(3);
    const [auth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevalue) => --prevalue);
        }, 1000);

        if (count === 0) {
            if (auth?.user) {
                navigate('/');
            } else {
                navigate('/login', {
                    state: location.pathname,
                });
            }
        }

        return () => clearInterval(interval);
    }, [count, navigate, location, auth]);

    return (<>
        <div className="spinner-container">

            <div className="spinner"></div>
            <h1 className="text-center">Redirecting you in {count} seconds</h1>
        </div>
        hi
    </>
    );
};

export default Spinner;
