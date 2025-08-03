import React from 'react';
import './Footer.css';

const Footer = ({ variant = 'default' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${variant}`}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>EthioSoft Marketplace</h3>
            <p>Empowering Ethiopian developers and connecting them with global opportunities.</p>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">GitHub</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>For Developers</h4>
            <ul>
              <li><a href="#">Upload Software</a></li>
              <li><a href="#">Earn Revenue</a></li>
              <li><a href="#">Build Portfolio</a></li>
              <li><a href="#">Developer Resources</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>For Buyers</h4>
            <ul>
              <li><a href="#">Browse Software</a></li>
              <li><a href="#">Read Reviews</a></li>
              <li><a href="#">Secure Downloads</a></li>
              <li><a href="#">Support Center</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} EthioSoft Marketplace. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 