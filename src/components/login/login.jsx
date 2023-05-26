import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login({ users }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic below
        const userEmail = event.target.elements.email.value;
        const userPassword = event.target.elements.password.value;
        // Find the user with the matching email and password
        const authenticatedUser = users.find((user) => user.email === userEmail && user.password === userPassword);
        console.log(authenticatedUser);
        if (authenticatedUser) {
            // Authentication successful, perform your desired actions
            console.log('Authentication successful');
            toast.success('Login successful'); // Show success toast notification
            // Reset the Login Form
            event.target.reset();
        } else {
            // Authentication failed, show an error message or perform other actions
            console.log('Authentication failed');
            toast.error('Invalid email or password'); // Show error toast notification

            // Show an error message or perform other actions
        }

        // Reset the form
        setFormData({
            email: '',
            password: '',
        });
    };

    const handleSignup = () => {
        // Handle signup navigation logic here
        // For example, you can use React Router to navigate to the signup component
        // history.push('/signup');
    };

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-4">
                    <div className="card p-5">
                        <h2 className="mb-5">Login</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="email">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" name="email" />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control type="password" name="password" />
                            </Form.Group>

                            <div className="text-center">
                                <br />
                                <Button variant="primary" type="submit" className="mb-3">Login</Button>
                                <p className="mt-0">Not registered? <Link to="/signup">Sign up here</Link></p>
                            </div>
                        </Form>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login;