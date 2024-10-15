import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; // Routes replaces Switch in React Router v6
import AuthProvider from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute'; // Assuming you have a custom PrivateRoute component
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

const App = () => {
    const [formData, setFormData] = useState({});

    const nextStep = (data, step) => {
        setFormData({ ...formData, ...data });
        step(); 
    };

    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Step1 next={nextStep} />} />
                    <Route path="/step2" element={<Step2 next={nextStep} formData={formData} />} />
                    <Route path="/step3" element={<Step3 formData={formData} />} />

                    <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;