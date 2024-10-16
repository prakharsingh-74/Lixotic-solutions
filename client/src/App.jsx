import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FormSteps from './pages/FormSteps';
import LoginPage from './pages/LoginPage';
import Dashboard from './components/Dashboard';
import EditProfile from './components/EditProfile';
import AuthProvider from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<FormSteps />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute><Dashboard /></PrivateRoute>}
          />
          <Route
            path="/edit-profile"
            element={<PrivateRoute><EditProfile /></PrivateRoute>}
          />
          {/* Redirect from root to login page */}
          <Route path="/" element={<Navigate to="/register" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;