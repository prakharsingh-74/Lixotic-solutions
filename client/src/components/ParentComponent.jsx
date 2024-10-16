import React, { useState } from 'react';
import FormSteps from './FormSteps';

const ParentComponent = () => {
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [userData, setUserData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const handleFormSubmit = (data) => {
        console.log('Form submitted:', data);

        if (data && data.user) {
            setUserData(data.user);
            setRegistrationSuccess(true);
            setErrorMessage('');
        } else {
            setErrorMessage('Registration failed. Please try again.');
        }
    };

    return (
        <div>
            <h1>Register User</h1>
            {registrationSuccess ? (
                <div>
                    <h2>Registration Successful!</h2>
                    <p>Welcome, {userData?.name}!</p>
                </div>
            ) : (
                <div>
                    <FormSteps onSubmit={handleFormSubmit} />
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                </div>
            )}
        </div>
    );
};

export default ParentComponent;