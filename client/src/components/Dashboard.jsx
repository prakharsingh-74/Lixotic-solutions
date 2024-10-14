import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <h1>Welcome, {user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}</p>
            <p>Phone Number: {user.phoneNumber}</p>
        </div>
    );
};

export default Dashboard;