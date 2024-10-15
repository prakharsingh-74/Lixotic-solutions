const Step3 = ({ formData }) => {
    return (
        <div>
            <h2>Step 3: Review Your Information</h2>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Address:</strong> {formData.address}</p>
        </div>
    );
};

export default Step3;