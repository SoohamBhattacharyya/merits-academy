import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span>Merits</span>
          <h5> -An IIT JU Alumni Initiative </h5>
        </div>
        
        <div className="navbar-right">
          <button className="login-btn">Log In</button>
          <button className="join-btn">Join The Community</button>
        </div>
      </div>
      
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;