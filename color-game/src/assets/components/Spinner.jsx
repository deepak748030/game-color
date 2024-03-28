import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import 'Spinner.css'
const Spinner = () => {
    const [showSpinner, setShowSpinner] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            // After 3 seconds, hide the spinner
            setShowSpinner(false);
            navigate('/login');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div>
            {showSpinner && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    {/* Custom spinner styling with rotating animation */}
                    <div className="spinner" style={{ borderTop: '5px solid #3498db', borderRadius: '50%', width: '50px', height: '50px', animation: 'spin 1s linear infinite' }}></div>
                </div>
            )}
        </div>
    );
};

export default Spinner;
