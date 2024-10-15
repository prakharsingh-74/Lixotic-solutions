import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Step1 = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate('/step2');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name', { required: true })} placeholder="Name" />
      <input {...register('email', { required: true })} placeholder="Email" />
      <input {...register('password', { required: true })} placeholder="Password" type="password" />
      <button type="submit">Next</button>
    </form>
  );
};

export default Step1;