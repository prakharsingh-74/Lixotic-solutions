import React from 'react';
import { useAuthContext } from '../context/AuthContext';

const Dashboard = () => {
    const { user, loading } = useAuthContext();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="dashboard">
            <h1>Welcome, {user ? user.name : 'Guest'}!</h1>
            {/* Other dashboard content */}
        </div>
    );
};

export default Dashboard;