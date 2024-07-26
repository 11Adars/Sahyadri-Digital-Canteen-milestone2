import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser } from '../api'; // Import API functions
import './Home.css';

const Home = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('student');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState(''); // State for showing messages
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (username && password) {
      try {
        const response = await loginUser(username, password);
        setMessage(response.data.message);
        if (response.data.success) {
          setIsLoggedIn(true);
          navigate('/menu');
        }
      } catch (error) {
        setMessage(error.response?.data?.message || 'An error occurred');
      }
    }
  };

  const handleRegister = async () => {
    if (username && password) {
      try {
        const response = await registerUser(username, password);
        setMessage(response.data.message);
        if (response.data.success) {
          setIsRegistering(false);
          alert('Registration successful! Please log in.');
        }
      } catch (error) {
        setMessage(error.response?.data?.message || 'An error occurred');
      }
    }
  };

  if (isLoggedIn) {
    return (
      <div>
        <h2>You are already logged in!</h2>
        <button onClick={() => navigate('/menu')}>Go to Menu</button>
      </div>
    );
  }

  return (
    <div className="home-wrapper">
      <div className="home-container">
        <img src='/path/to/your/logo.png' alt="Classy Canteen Corner Logo" className="logo" />
        <h1>Welcome to Sahyadri Digital Canteen</h1>
        {!isRegistering ? (
          <div className="login-form">
            <h2>Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <button onClick={() => setIsRegistering(true)}>Register</button>
          </div>
        ) : (
          <div className="register-form">
            <h2>Register</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <select value={userType} onChange={(e) => setUserType(e.target.value)}>
              <option value="student">Student</option>
              <option value="staff">Staff</option>
            </select>
            <button onClick={handleRegister}>Register</button>
            <button onClick={() => setIsRegistering(false)}>Back to Login</button>
          </div>
        )}
        {message && <p>{message}</p>} {/* Show message */}
      </div>

      <div className="footer">
        &copy; 2024 Sahyadri Digital Canteen. All rights reserved.
      </div>
    </div>
  );
};

export default Home;
