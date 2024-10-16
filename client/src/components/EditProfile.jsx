import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { updateUserProfile } from '../api';

const EditProfile = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: user.name,
    address: user.address,
    phoneNumber: user.phoneNumber,
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    await axios.put(`/api/user/${user._id}`, formData);
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default EditProfile;