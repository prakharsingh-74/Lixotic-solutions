import React from 'react';
import { useNavigate } from 'react-router-dom';

const Step3 = ({ formData }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h3>Review your data:</h3>
      {/* Display data */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Step3;