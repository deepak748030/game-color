import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../hooks/AuthContext";
import { Spinner } from "react-bootstrap";

const ProtectRoute = ({ redirect = '/login' }) => {
    const { auth } = useAuth();
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const authCheck = async () => {

            const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/user-auth`);
            if (response.data?.ok) {
                setAuthenticated(true);
            } else {
                setAuthenticated(false);
            }

        };

        if (auth?.token) {
            authCheck();
        }
    }, [auth?.token]);

    return authenticated ? <Outlet /> : <Spinner />;
};

export default ProtectRoute;
