import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Spinner = () => {
    const [showSpinner, setShowSpinner] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            // After 3 seconds, hide the spinner
            setShowSpinner(false);
            navigate('/login')
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {showSpinner && (
                <div>
                    {/* Your spinner component */}
                    <h1>Loading...</h1>
                </div>
            )}
        </div>
    );
};

export default Spinner;
