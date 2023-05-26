
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import './App.css';
import Header from './components/common/header/header'
import Footer from './components/common/footer/footer'
import Dashboard from './components/dashboard/dashboard';

function App() {
  const [users, setUsers] = useState([
    // Hardcoded users to save time on signup
    { email: 'abc@example.com', password: 'abc123' },
    { email: 'user2@example.com', password: 'password2' },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login status of the application

  return (
    <Router>
      <div className="app">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Login users={users} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<Signup users={users} setUsers={setUsers} />} />
            <Route path="/dashboard" element={<Dashboard isLoggedIn={isLoggedIn}/>} />

          </Routes>
        </div>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
