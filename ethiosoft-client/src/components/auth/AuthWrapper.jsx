import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LoginForm from './LoginForm.jsx';
import RegisterForm from './RegisterForm.jsx';

const AuthWrapper = () => {
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're on the register route
  React.useEffect(() => {
    if (location.pathname === '/register') {
      setShowRegister(true);
    } else {
      setShowRegister(false);
    }
  }, [location.pathname]);

  const handleAuthSuccess = (user) => {
    // Redirect to appropriate dashboard based on user role
    switch (user.role) {
      case 'Seller':
        navigate('/seller');
        break;
      case 'Buyer':
        navigate('/buyer');
        break;
      case 'Admin':
        navigate('/admin');
        break;
      default:
        navigate('/');
    }
  };

  const handleBackToLanding = () => {
    navigate('/');
  };

  return (
    <div className="App">
      <div className="auth-container">
        <div className="auth-header">
          <h1>EthioSoft Marketplace</h1>
          <p>A digital marketplace for Ethiopian software developers</p>
          <button onClick={handleBackToLanding} className="back-to-landing">
            ← Back to Home
          </button>
        </div>
        
        {showRegister ? (
          <RegisterForm 
            onSuccess={handleAuthSuccess}
            onSwitchToLogin={() => navigate('/login')}
          />
        ) : (
          <LoginForm 
            onSuccess={handleAuthSuccess}
            onSwitchToRegister={() => navigate('/register')}
          />
        )}
      </div>
    </div>
  );
};

export default AuthWrapper; 