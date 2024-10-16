import React, { createContext, useContext, useState, useEffect } from 'react';
import { getUserProfile, registerUser, loginUser } from '../api';
import { useAuth } from '../hooks/useAuth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { token, setToken } = useAuth();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            if (token) {
                try {
                    const profile = await getUserProfile(token);
                    setUser(profile);
                } catch (error) {
                    console.error('Failed to fetch user profile:', error);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [token]);

    const login = async (email, password) => {
        try {
            const { token, userProfile } = await loginUser(email, password);
            setToken(token);
            setUser(userProfile);
            setError(null);
        } catch (error) {
            console.error('Login failed:', error);
            setError('Invalid email or password');
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, error, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;