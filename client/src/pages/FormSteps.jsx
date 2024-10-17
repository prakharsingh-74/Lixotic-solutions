import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../components/FormContext';

const Step1 = () => {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name || ''}
        onChange={handleChange}
        required // Optional: Enforce field requirement
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email || ''}
        onChange={handleChange}
        required // Optional: Enforce field requirement
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password || ''}
        onChange={handleChange}
        required // Optional: Enforce field requirement
      />
      <button onClick={() => navigate('/step2')}>Next</button>
    </div>
  );
};

const Step2 = () => {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Step 2: Contact Information</h2>
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address || ''}
        onChange={handleChange}
        required // Optional: Enforce field requirement
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber || ''}
        onChange={handleChange}
        required // Optional: Enforce field requirement
      />
      <button onClick={() => navigate('/step1')}>Previous</button>
      <button onClick={() => navigate('/step3')}>Next</button>
    </div>
  );
};

const Step3 = () => {
  const { formData } = useContext(FormContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Omit the password field when logging
    const { password, ...dataToLog } = formData; 
    console.log('Submitting data:', dataToLog); // Only log sensitive info without the password

    try {
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful:', data);
        navigate('/login'); // Redirect to login page
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData.message);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  return (
    <div>
      <h2>Step 3: Review and Submit</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Address: {formData.address}</p>
      <p>Phone Number: {formData.phoneNumber}</p>
      <button onClick={() => navigate('/step2')}>Previous</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export { Step1, Step2, Step3 };