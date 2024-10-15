import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const res = await axios.post('/api/login', data);
      const token = res.data.token;

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setUser(token);
      
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', { required: true })} placeholder="Email" />
      <input {...register('password', { required: true })} placeholder="Password" type="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;