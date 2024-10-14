import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthProvider from '../context/AuthContext';
import PrivateRoute from '../routes/PrivateRoute';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Dashboard from './Dashboard';
import Login from './components/Login';

const App = () => {
    const [formData, setFormData] = useState({});

    const nextStep = (data) => {
        setFormData({ ...formData, ...data });
    };

    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <h1>Registration</h1>
                        <Step1 next={nextStep} />
                    </Route>
                    <Route path="/step2">
                        <Step2 next={nextStep} />
                    </Route>
                    <Route path="/step3">
                        <Step3 data={formData} />
                    </Route>
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <Route path="/login">
                        <Login/>
                    </Route>
                </Switch>
            </Router>
        </AuthProvider>
    );
};

export default App;