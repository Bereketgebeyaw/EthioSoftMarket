import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ onShowLogin, onShowRegister }) => {
  const navigate = useNavigate();

  const handleShowLogin = () => {
    if (onShowLogin) {
      onShowLogin();
    } else {
      navigate('/login');
    }
  };

  const handleShowRegister = () => {
    if (onShowRegister) {
      onShowRegister();
    } else {
      navigate('/register');
    }
  };
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <h2>EthioSoft Marketplace</h2>
        </div>
        <div className="nav-actions">
          <button onClick={handleShowLogin} className="nav-btn login-btn">Sign In</button>
          <button onClick={handleShowRegister} className="nav-btn register-btn">Get Started</button>
        </div>
      </nav>
    </header>
  );
};

export default Header; 