import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Step2 = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate('/step3');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('address', { required: true })} placeholder="Address" />
      <input {...register('phoneNumber', { required: true })} placeholder="Phone Number" />
      <button type="submit">Next</button>
    </form>
  );
};

export default Step2;