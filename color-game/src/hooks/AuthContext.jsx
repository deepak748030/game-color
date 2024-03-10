import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import axios from 'axios';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    const login = (userData) => {
        localStorage.setItem('auth', JSON.stringify(userData))
        setAuth(userData);
    }
    axios.defaults.headers.common['Authorization'] = auth?.token;

    useEffect(() => {
        const data = localStorage.getItem('auth');
        if (data) {
            const parseData = JSON.parse(data);
            setAuth(parseData)
        }
    }, [])


    const logout = () => {
        localStorage.removeItem('auth');
        setAuth(null)
    }

    return (
        <AuthContext.Provider value={{ auth, login, logout }} >
            {children}
        </AuthContext.Provider>
    )

}

// Custom hook for accessing auth context
export const useAuth = () => {
    return useContext(AuthContext)
}

export default AuthContext;