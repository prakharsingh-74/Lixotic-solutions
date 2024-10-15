import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes instead of Switch
import AuthProvider from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

const App = () => {
    const [formData, setFormData] = useState({});

    const nextStep = (data) => {
        setFormData({ ...formData, ...data });
    };

    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<><h1>Registration</h1><Step1 next={nextStep} /></>} />
                    <Route path="/step2" element={<Step2 next={nextStep} />} />
                    <Route path="/step3" element={<Step3 data={formData} />} />
                    <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
