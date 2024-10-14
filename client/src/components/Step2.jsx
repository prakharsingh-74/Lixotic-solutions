import React from 'react';
import { useForm } from 'react-hook-form';

const Step2 = ({ next }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        next(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('address')} placeholder="Address" required />
            <input {...register('phoneNumber')} placeholder="Phone Number" required />
            <button type="submit">Next</button>
        </form>
    );
};

export default Step2;