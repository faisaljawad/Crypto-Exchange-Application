
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import './App.css';
import Header from './components/common/header/header'
import Footer from './components/common/footer/footer'

function App() {
  const [users, setUsers] = useState([
    { email: 'abc@example.com', password: 'abc123' },
    { email: 'user2@example.com', password: 'password2' },
    // Add more users as needed
  ]);

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Login users={users} />} />
            <Route path="/signup" element={<Signup users={users} setUsers={setUsers} />} />
          </Routes>
        </div>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
