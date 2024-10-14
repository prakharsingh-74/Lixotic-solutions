import React from 'react';
import axios from 'axios';

const Step3 = ({ data }) => {
    const handleSubmit = async () => {
        try {
            const response = await axios.post('/api/auth/register', data);
            alert(response.data.message);
        } catch (error) {
            alert('Error registering');
        }
    };

    return (
        <div>
            <h2>Review your details</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Step3;