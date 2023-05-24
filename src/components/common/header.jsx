import { Link } from 'react-router-dom';
import React from 'react';
import './header.css';
function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="menu">
                    <li><Link to="/dashboard">Home</Link></li>
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
