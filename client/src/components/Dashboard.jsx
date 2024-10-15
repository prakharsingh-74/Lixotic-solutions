import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';

const Dashboard = () => {
  const { user, getUserDetails } = useContext(AuthContext);

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div>
      <h2>Welcome, {user?.name}</h2>
      <p>Email: {user?.email}</p>
      <p>Address: {user?.address}</p>
      <p>Phone Number: {user?.phoneNumber}</p>
    </div>
  );
};

export default Dashboard;