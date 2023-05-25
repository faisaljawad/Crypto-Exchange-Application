import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


function Signup({ users, setUsers }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({}); // State to hold the validation errors
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        address: Yup.string().required('Address is required'),
        uploadedFile: Yup.mixed().test('fileType', 'Incorrect file format', (value) => {
            if (!value) return true; // Allow empty file field
            return value && value.type === 'application/pdf'; // only PDF files is acceptable
        }),
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formValues = Object.fromEntries(formData.entries());
        try {
            await validationSchema.validate(formValues, { abortEarly: false });

            // Creating New User Object
            const newUser = {
                name: formValues.name,
                email: formValues.email,
                password: formValues.password,
                address: formValues.address
            };

            // Update the state by adding the new user to the existing array
            setUsers([...users, newUser]);
            toast.success('Sign Up Successful'); // Show success toast notification
            navigate('/'); // Redirect to the login page
            // Clear the form
            event.target.reset();

            setErrors({}); // Clear any existing errors

        } catch (error) {
            // Validation failed, set the errors state
            const validationErrors = {};
            error.inner.forEach((err) => {
                validationErrors[err.path] = err.message;
            });
            setErrors(validationErrors);
            toast.success('Sign Up Failed'); // Show success toast notification
            
        }
    };

    const handleLogin = () => {
        // Handle login navigation logic here
        // For example, you can use React Router to navigate to the login component
        // history.push('/');
    };

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-6">
                    <div className="card p-5">
                        <h2 className="mb-4">Sign Up</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="name">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control type="text" name="name" />
                                {errors.name && <Alert variant="danger">{errors.name}</Alert>}
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" name="email" />
                                {errors.email && <Alert variant="danger">{errors.email}</Alert>}
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control type="password" name="password" />
                                {errors.password && <Alert variant="danger">{errors.password}</Alert>}
                            </Form.Group>

                            <Form.Group controlId="address">
                                <Form.Label>Address:</Form.Label>
                                <Form.Control type="text" name="address" />
                                {errors.address && <Alert variant="danger">{errors.address}</Alert>}
                            </Form.Group>

                            <Form.Group controlId="uploadedFile">
                                <Form.Label>Upload CNIC:</Form.Label>
                                <Form.Control type="file" name="uploadedFile" accept=".pdf" />
                                {errors.uploadedFile && <Alert variant="danger">{errors.uploadedFile}</Alert>}
                            </Form.Group>

                            <div className="text-center">
                                <br />
                                <Button variant="primary" type="submit" className="mb-3">Sign Up</Button>
                                <br />
                                <p className="mt-0">Already have an account? <Link to="/">Sign In</Link></p>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
