// src/components/StepThree.js

import React from 'react';

const StepThree = ({ userData, onSubmit, onPrev }) => {
    return (
        <div>
            <h3>Step 3: Review Information</h3>
            <div className="form-group">
                <p><strong>Name:</strong> {userData.name}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Password:</strong> {userData.password.replace(/./g, '*')}</p>
                <p><strong>Address:</strong> {userData.address}</p>
                <p><strong>Phone Number:</strong> {userData.phoneNumber}</p>
            </div>
            <button type="button" onClick={onPrev}>Back</button>
            <button type="submit">Submit</button>
        </div>
    );
};

export default StepThree;