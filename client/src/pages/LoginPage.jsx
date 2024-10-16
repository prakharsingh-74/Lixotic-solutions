import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { registerUser } from '../api';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const { token } = useAuth();
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await registerUser({ email, password });
            
            if (response.token) {
                localStorage.setItem('token', response.token);
                navigate('/dashboard');
            }
        } catch (error) {
            setError('Login failed. Please check your credentials.');
            console.error('Login error:', error);
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>} {/* Display error message if any */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;