import React from 'react';
import { useForm } from 'react-hook-form';

const Step1 = ({ next }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        next(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name')} placeholder="Name" required />
            <input {...register('email')} placeholder="Email" type="email" required />
            <input {...register('password')} placeholder="Password" type="password" required />
            <button type="submit">Next</button>
        </form>
    );
};

export default Step1;