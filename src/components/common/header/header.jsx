import { Link } from 'react-router-dom';
import React from 'react';
import './header.css';
import { useNavigate } from 'react-router-dom';


function Header({ isLoggedIn, setIsLoggedIn}) {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Change login state to false
        setIsLoggedIn(false);
        navigate('/'); // After logout, the user will be redirect to login page 
    };

    return (
        <header className="header">
            <nav className="navbar">
                <ul className="menu">
                    <li><Link to="/dashboard">Home</Link></li>
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    {isLoggedIn && (
                        <React.Fragment>
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/blogs">Blogs</Link>
                            </li>
                            <li>
                                <button className="btn btn-danger" onClick={handleLogout}>Sign Out</button>
                            </li>
                        </React.Fragment>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
