import React, { createContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginUser = async (loginData) => {
    const res = await axios.post('/api/login', loginData);
    localStorage.setItem('token', res.data.token);
    setUser(res.data);
  };

  const getUserDetails = async () => {
    const token = localStorage.getItem('token');
    const res = await axios.get(`/api/user/${user._id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUser(res.data);
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, getUserDetails }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;