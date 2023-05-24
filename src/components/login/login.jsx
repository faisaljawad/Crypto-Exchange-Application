import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic below
        const userEmail = event.target.elements.email.value;
        const userPassword = event.target.elements.password.value;
        console.log(userEmail, userPassword);
    };

    const handleSignup = () => {
        // Handle signup navigation logic here
        // For example, you can use React Router to navigate to the signup component
        // history.push('/signup');
    };

    return (

        <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
            <div className="card p-5">
                <h2 className="mb-4">Login</h2>
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
    );
}

export default Login;