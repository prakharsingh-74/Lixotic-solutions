import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FormProvider } from './components/FormContext';
import { Step1, Step2, Step3 } from './pages/FormSteps';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ProtectedRoute from './routes/ProtectedRoute';

const App = () => {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="/step1" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute component={<Dashboard/>} />} />
        </Routes>
      </Router>
    </FormProvider>
  );
};

export default App;