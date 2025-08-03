import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/api';
import Loading from '../common/Loading.jsx';

function BuyerDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('browse');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await authService.getCurrentUser();
        setUser(userData);
      } catch (error) {
        console.error('Failed to load user data:', error);
        setError(error.message || 'Failed to load user data');
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const handleLogout = () => {
    authService.logout();
    navigate('/');
  };

  if (loading) {
    return <Loading message="Loading dashboard..." className="full-page" />;
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-message">{error}</div>
        <button onClick={handleLogout} className="auth-button">
          Go to Login
        </button>
      </div>
    );
  }

  if (!user) {
    return <div className="error">Failed to load user data</div>;
  }

  return (
    <div className="buyer-dashboard">
      <header className="dashboard-header">
        <div className="header-left">
          <h1>Buyer Dashboard</h1>
          <p>Discover and purchase amazing software</p>
        </div>
        <div className="header-right">
          <div className="user-info">
            <span>Hello, {user.FullName}!</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="dashboard-content">
        <div className="sidebar">
          <nav className="dashboard-nav">
            <button 
              className={`nav-item ${activeTab === 'browse' ? 'active' : ''}`}
              onClick={() => setActiveTab('browse')}
            >
              🔍 Browse Software
            </button>
            <button 
              className={`nav-item ${activeTab === 'purchases' ? 'active' : ''}`}
              onClick={() => setActiveTab('purchases')}
            >
              📦 My Purchases
            </button>
            <button 
              className={`nav-item ${activeTab === 'downloads' ? 'active' : ''}`}
              onClick={() => setActiveTab('downloads')}
            >
              ⬇️ Downloads
            </button>
            <button 
              className={`nav-item ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              ⭐ My Reviews
            </button>
            <button 
              className={`nav-item ${activeTab === 'wishlist' ? 'active' : ''}`}
              onClick={() => setActiveTab('wishlist')}
            >
              ❤️ Wishlist
            </button>
            <button 
              className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              👤 Profile
            </button>
          </nav>
        </div>

        <div className="main-content">
          {activeTab === 'browse' && (
            <div className="tab-content">
              <h2>Browse Software</h2>
              <div className="search-filters">
                <div className="search-bar">
                  <input
                    type="text"
                    placeholder="Search software..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button className="search-btn">🔍</button>
                </div>
                <div className="filters">
                  <select 
                    value={selectedCategory} 
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    <option value="business">Business</option>
                    <option value="development">Development</option>
                    <option value="education">Education</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="productivity">Productivity</option>
                    <option value="utility">Utility</option>
                  </select>
                  <select>
                    <option value="">All Prices</option>
                    <option value="free">Free</option>
                    <option value="paid">Paid</option>
                  </select>
                  <select>
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>
              
              <div className="software-grid">
                <p className="empty-state">No software available yet. Check back soon for amazing Ethiopian software!</p>
              </div>
            </div>
          )}

          {activeTab === 'purchases' && (
            <div className="tab-content">
              <h2>My Purchases</h2>
              <div className="purchases-overview">
                <div className="purchase-stats">
                  <div className="stat-card">
                    <h3>Total Purchases</h3>
                    <p className="stat-number">0</p>
                  </div>
                  <div className="stat-card">
                    <h3>Total Spent</h3>
                    <p className="stat-number">$0.00</p>
                  </div>
                </div>
                <div className="purchases-list">
                  <p className="empty-state">No purchases yet. Start browsing to find great software!</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'downloads' && (
            <div className="tab-content">
              <h2>Downloads</h2>
              <div className="downloads-list">
                <p className="empty-state">No downloads yet. Purchase software to access downloads here.</p>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="tab-content">
              <h2>My Reviews</h2>
              <div className="reviews-overview">
                <div className="review-stats">
                  <div className="stat-card">
                    <h3>Reviews Written</h3>
                    <p className="stat-number">0</p>
                  </div>
                </div>
                <div className="reviews-list">
                  <p className="empty-state">No reviews written yet. Review software you've purchased to help other buyers!</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'wishlist' && (
            <div className="tab-content">
              <h2>Wishlist</h2>
              <div className="wishlist-list">
                <p className="empty-state">Your wishlist is empty. Add software to your wishlist while browsing!</p>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="tab-content">
              <h2>Profile Settings</h2>
              <div className="profile-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" value={user.FullName} readOnly />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" value={user.Email} readOnly />
                </div>
                <div className="form-group">
                  <label>Role</label>
                  <input type="text" value={user.Role} readOnly />
                </div>
                <div className="form-group">
                  <label>Member Since</label>
                  <input type="text" value={new Date(user.CreatedAt).toLocaleDateString()} readOnly />
                </div>
                <button className="secondary-btn">Edit Profile</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BuyerDashboard; 