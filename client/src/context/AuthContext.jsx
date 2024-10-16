import React, { createContext, useContext, useState, useEffect } from 'react';
import { getUserProfile, registerUser } from '../api';
import { useAuth } from '../hooks/useAuth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { token } = useAuth();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

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

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);