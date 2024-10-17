import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/userdata', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (err) {
        setError('Failed to fetch user data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Rendering user data
  return (
    <div>
      <h1>Dashboard</h1>
      {userData && (
        <div>
          <h2>Welcome, {userData.name}</h2>
          {/* Render other user data as needed */}
          <p>Email: {userData.email}</p>
          {/* Add more user data display here */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;