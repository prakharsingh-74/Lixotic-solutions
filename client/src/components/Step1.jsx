import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Step1 = ({ next }) => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        next(data, () => navigate('/step2'));
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