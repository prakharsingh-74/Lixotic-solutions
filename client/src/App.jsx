import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;