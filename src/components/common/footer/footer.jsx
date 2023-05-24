import { Link } from 'react-router-dom';
import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h4>Contact Information</h4>
                        <p>
                            <strong>Name:</strong> Faisal Jawad
                        </p>
                        <p>
                            <strong>Phone:</strong> (+92) 320 849 000 8
                        </p>
                        <p>
                            <strong>Company:</strong> Systems Limited
                        </p>
                        <p>
                            <strong>Location:</strong> Lahore, Pakistan
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h4>Links</h4>
                        <ul>
                            <li>
                                <a href="/dashboard">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
