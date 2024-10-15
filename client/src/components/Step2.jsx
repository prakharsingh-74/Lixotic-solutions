import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Step2 = ({ next, formData }) => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        next(data, () => navigate('/step3'));
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