import React from 'react';
import './dashboard.css';
import { useNavigate } from 'react-router-dom';



function Dashboard({ isLoggedIn }) {
    const navigate = useNavigate();
    console.log(isLoggedIn);
    if (!isLoggedIn) {
        return (
            <div className="dashboard-container">
                <div className="welcome-message">
                    <h2>Sorry!</h2>
                    <p>You do not have appropriate access to view dashboard.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="dashboard-container">
            <div className="welcome-message">
                <h2>Welcome!</h2>
                <p>This is your dashboard. You can add more content and functionality here.</p>
            </div>
        </div>
    );
}

export default Dashboard;
