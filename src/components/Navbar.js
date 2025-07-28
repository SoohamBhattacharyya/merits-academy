import React, { useState } from 'react';
import './Navbar.css';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  // Both buttons will now open the login modal
  const handleJoinClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <span>Merits</span>
            <h5> -An IIT JU Alumni Initiative </h5>
          </div>

          <div className="navbar-right">
            <button className="login-btn" onClick={() => setShowModal(true)}>Log In</button>
            <button className="join-btn" onClick={handleJoinClick}>Join The Community</button>
          </div>
        </div>

        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
        </div>
      </nav>

      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Navbar;
