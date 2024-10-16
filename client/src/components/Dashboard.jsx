import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => navigate('/edit-profile')}>Edit Profile</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;