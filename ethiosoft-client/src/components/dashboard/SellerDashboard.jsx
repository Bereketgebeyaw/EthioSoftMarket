import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/api';
import Loading from '../common/Loading.jsx';

function SellerDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

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
    <div className="seller-dashboard">
      <header className="dashboard-header">
        <div className="header-left">
          <h1>Seller Dashboard</h1>
          <p>Manage your software products and sales</p>
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
              className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              📊 Overview
            </button>
            <button 
              className={`nav-item ${activeTab === 'products' ? 'active' : ''}`}
              onClick={() => setActiveTab('products')}
            >
              📦 My Products
            </button>
            <button 
              className={`nav-item ${activeTab === 'upload' ? 'active' : ''}`}
              onClick={() => setActiveTab('upload')}
            >
              ⬆️ Upload Software
            </button>
            <button 
              className={`nav-item ${activeTab === 'sales' ? 'active' : ''}`}
              onClick={() => setActiveTab('sales')}
            >
              💰 Sales & Revenue
            </button>
            <button 
              className={`nav-item ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              ⭐ Reviews
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
          {activeTab === 'overview' && (
            <div className="tab-content">
              <h2>Dashboard Overview</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <h3>Total Products</h3>
                  <p className="stat-number">0</p>
                  <p className="stat-label">Active listings</p>
                </div>
                <div className="stat-card">
                  <h3>Total Sales</h3>
                  <p className="stat-number">$0</p>
                  <p className="stat-label">This month</p>
                </div>
                <div className="stat-card">
                  <h3>Downloads</h3>
                  <p className="stat-number">0</p>
                  <p className="stat-label">Total downloads</p>
                </div>
                <div className="stat-card">
                  <h3>Reviews</h3>
                  <p className="stat-number">0</p>
                  <p className="stat-label">Average rating</p>
                </div>
              </div>
              
              <div className="quick-actions">
                <h3>Quick Actions</h3>
                <div className="action-buttons">
                  <button className="primary-btn">Upload New Software</button>
                  <button className="secondary-btn">View All Products</button>
                  <button className="secondary-btn">Check Sales Report</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="tab-content">
              <h2>My Products</h2>
              <div className="products-header">
                <p>Manage your software products</p>
                <button className="primary-btn">Add New Product</button>
              </div>
              <div className="products-list">
                <p className="empty-state">No products uploaded yet. Start by uploading your first software!</p>
              </div>
            </div>
          )}

          {activeTab === 'upload' && (
            <div className="tab-content">
              <h2>Upload Software</h2>
              <div className="upload-form">
                <div className="form-group">
                  <label>Software Title</label>
                  <input type="text" placeholder="Enter software title" />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea placeholder="Describe your software..." rows="4"></textarea>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Price ($)</label>
                    <input type="number" placeholder="0.00" min="0" step="0.01" />
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <select>
                      <option value="">Select category</option>
                      <option value="business">Business</option>
                      <option value="development">Development</option>
                      <option value="education">Education</option>
                      <option value="entertainment">Entertainment</option>
                      <option value="productivity">Productivity</option>
                      <option value="utility">Utility</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Software File</label>
                  <input type="file" accept=".zip,.exe,.dmg,.deb,.rpm" />
                  <small>Supported formats: ZIP, EXE, DMG, DEB, RPM (Max 1GB)</small>
                </div>
                <div className="form-group">
                  <label>Screenshots</label>
                  <input type="file" accept="image/*" multiple />
                  <small>Upload screenshots of your software (optional)</small>
                </div>
                <button className="primary-btn">Upload Software</button>
              </div>
            </div>
          )}

          {activeTab === 'sales' && (
            <div className="tab-content">
              <h2>Sales & Revenue</h2>
              <div className="sales-overview">
                <div className="sales-stats">
                  <div className="stat-card">
                    <h3>Total Revenue</h3>
                    <p className="stat-number">$0.00</p>
                  </div>
                  <div className="stat-card">
                    <h3>This Month</h3>
                    <p className="stat-number">$0.00</p>
                  </div>
                  <div className="stat-card">
                    <h3>Total Orders</h3>
                    <p className="stat-number">0</p>
                  </div>
                </div>
                <div className="sales-chart">
                  <p className="empty-state">Sales data will appear here once you have sales</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="tab-content">
              <h2>Customer Reviews</h2>
              <div className="reviews-overview">
                <div className="reviews-stats">
                  <div className="stat-card">
                    <h3>Average Rating</h3>
                    <p className="stat-number">0.0</p>
                  </div>
                  <div className="stat-card">
                    <h3>Total Reviews</h3>
                    <p className="stat-number">0</p>
                  </div>
                </div>
                <div className="reviews-list">
                  <p className="empty-state">No reviews yet. Reviews will appear here once customers rate your software.</p>
                </div>
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

export default SellerDashboard; 