import { createContext, useCallback, useContext, useState } from 'react'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    const login = (userData) => {
        localStorage.setItem('auth', JSON.stringify(userData))
        setAuth(userData);
    }
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