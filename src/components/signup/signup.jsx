import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Signup() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const userName = event.target.elements.name.value;
        const userEmail = event.target.elements.email.value;
        const userPassword = event.target.elements.password.value;
        console.log(userName, userEmail, userPassword);
    };

    const handleLogin = () => {
        // Handle login navigation logic here
        // For example, you can use React Router to navigate to the login component
        // history.push('/');
    };

    return (
        <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
            <div className="card p-5">
                <h2 className="mb-4">Sign Up</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" name="name" />
                    </Form.Group>

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
                        <Button variant="primary" type="submit" className="mb-3">Sign Up</Button>
                        <br />
                        <p className="mt-0">Already have an account? <Link to="/">Sign In</Link></p>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Signup;
