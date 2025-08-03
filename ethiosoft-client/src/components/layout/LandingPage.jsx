import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import '../../styles/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleShowLogin = () => {
    navigate('/login');
  };

  const handleShowRegister = () => {
    navigate('/register');
  };
  return (
    <div className="landing-page">
      <Header onShowLogin={handleShowLogin} onShowRegister={handleShowRegister} />
      
      {/* Hero Section */}
      <section className="hero-section">
        
        <div className="hero-content">
          <div className="hero-text">
            <h1>Ethiopia's Premier Software Marketplace</h1>
            <p>Connect with talented Ethiopian developers and discover innovative software solutions. Buy, sell, and collaborate in Africa's fastest-growing tech ecosystem.</p>
            <div className="hero-buttons">
              <button onClick={handleShowRegister} className="cta-button primary">Start Selling</button>
              <button onClick={handleShowRegister} className="cta-button secondary">Browse Software</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-placeholder">
              <span>🚀</span>
              <p>Innovation Hub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Why Choose EthioSoft Marketplace?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>For Developers</h3>
              <p>Upload and sell your software to a growing market. Get paid for your innovations with secure payment processing.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛒</div>
              <h3>For Buyers</h3>
              <p>Discover quality software solutions from Ethiopian developers. Browse by category, read reviews, and make informed purchases.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Reliable</h3>
              <p>Built with enterprise-grade security. Your data and transactions are protected with industry-standard encryption.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Local & Global</h3>
              <p>Connect with local developers while reaching international customers. Support Ethiopia's tech ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Create Account</h3>
              <p>Sign up as a developer or buyer in just a few clicks</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Upload or Browse</h3>
              <p>Developers upload software, buyers browse and discover</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Connect & Transact</h3>
              <p>Secure payments, instant downloads, and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="categories-section">
        <div className="container">
          <h2>Popular Categories</h2>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">📱</div>
              <h3>Mobile Apps</h3>
              <p>iOS and Android applications</p>
            </div>
            <div className="category-card">
              <div className="category-icon">💼</div>
              <h3>Business Software</h3>
              <p>Enterprise and productivity tools</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🎮</div>
              <h3>Games</h3>
              <p>Entertainment and educational games</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🔧</div>
              <h3>Development Tools</h3>
              <p>Utilities and development software</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Join Ethiopia's Tech Revolution?</h2>
          <p>Start your journey today and be part of the growing Ethiopian software ecosystem.</p>
          <div className="cta-buttons">
            <button onClick={handleShowRegister} className="cta-button primary large">Join Now</button>
            <button onClick={handleShowLogin} className="cta-button secondary large">Sign In</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage; 