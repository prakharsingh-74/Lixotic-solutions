import React from 'react';

const Dashboard = () => {
  const token = localStorage.getItem('token');

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome! You are logged in.</p>
      {/* Display user details or any other content here */}
    </div>
  );
};

export default Dashboard;