import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(() => localStorage.getItem('auth_token'));
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (token) {
            // Optionally, fetch user info here if your API supports it
            setUser({ token });
        } else {
            setUser(null);
        }
    }, [token]);

    const login = async (email, password) => {
        setLoading(true);
        setError(null);
        console.log("Login payload:", { email, password });
        try {
            const res = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: { 'content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            if (!res.ok) {
                throw new Error('Invalid credentials');
            }
            const data = await res.json();
            localStorage.setItem('auth_token', data.accessToken);
            setToken(data.accessToken);
            setUser({ ...data.user, token: data.accessToken });
            navigate('/'); // redirect to dashboard or home
        } catch (err) {
            console.log(err)
            setError(err.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('auth_token');
        setToken(null);
        setUser(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, token, loading, error, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
