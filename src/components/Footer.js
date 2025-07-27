import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Merits</h2>
          <p> -An IIT JU Alumni Initiative </p>
          <p>Empowering learners and educators</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Join Us</h3>
            <ul>
              <li><a href="#login">Log In</a></li>
              <li><a href="#join">Join The Community</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li>Email: info@merits.academy</li>
              <li>Phone: +91 8101417215</li>
              <li>Address: Salt Lake, Kolkata</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Merits Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;