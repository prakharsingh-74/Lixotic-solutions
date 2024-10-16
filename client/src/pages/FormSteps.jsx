import React, { useState } from 'react';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import StepThree from '../components/StepThree';
import { registerUser } from '../api';

const FormSteps = () => {
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        phoneNumber: '',
    });

    const handleNext = (data) => {
        setUserData((prevData) => ({
            ...prevData,
            ...data,
        }));
        setStep((prevStep) => prevStep + 1);
    };

    const handlePrev = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser(userData);
            console.log('Registration Successful:', response);
        } catch (error) {
            console.error('Registration Failed:', error);
        }
    };

    return (
        <div className="form-steps">
            <h2>User Registration</h2>
            <form onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()}>
                {step === 1 && (
                    <StepOne userData={userData} onNext={handleNext} />
                )}
                {step === 2 && (
                    <StepTwo userData={userData} onNext={handleNext} onPrev={handlePrev} />
                )}
                {step === 3 && (
                    <StepThree userData={userData} onSubmit={handleSubmit} onPrev={handlePrev} />
                )}
            </form>
        </div>
    );
};

export default FormSteps;