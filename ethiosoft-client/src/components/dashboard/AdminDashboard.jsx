import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/api';
import Loading from '../common/Loading.jsx';

function AdminDashboard() {
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
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <div className="header-left">
          <h1>Admin Dashboard</h1>
          <p>Manage the EthioSoft Marketplace</p>
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
              className={`nav-item ${activeTab === 'software' ? 'active' : ''}`}
              onClick={() => setActiveTab('software')}
            >
              📦 Software Management
            </button>
            <button 
              className={`nav-item ${activeTab === 'users' ? 'active' : ''}`}
              onClick={() => setActiveTab('users')}
            >
              👥 User Management
            </button>
            <button 
              className={`nav-item ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              ⭐ Review Moderation
            </button>
            <button 
              className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
              onClick={() => setActiveTab('analytics')}
            >
              📈 Analytics
            </button>
            <button 
              className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              ⚙️ Settings
            </button>
          </nav>
        </div>

        <div className="main-content">
          {activeTab === 'overview' && (
            <div className="tab-content">
              <h2>System Overview</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <h3>Total Users</h3>
                  <p className="stat-number">0</p>
                  <p className="stat-label">Registered users</p>
                </div>
                <div className="stat-card">
                  <h3>Total Software</h3>
                  <p className="stat-number">0</p>
                  <p className="stat-label">Available products</p>
                </div>
                <div className="stat-card">
                  <h3>Pending Approval</h3>
                  <p className="stat-number">0</p>
                  <p className="stat-label">Software awaiting review</p>
                </div>
                <div className="stat-card">
                  <h3>Total Sales</h3>
                  <p className="stat-number">$0</p>
                  <p className="stat-label">Platform revenue</p>
                </div>
              </div>
              
              <div className="quick-actions">
                <h3>Quick Actions</h3>
                <div className="action-buttons">
                  <button className="primary-btn">Review Pending Software</button>
                  <button className="secondary-btn">View All Users</button>
                  <button className="secondary-btn">System Analytics</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'software' && (
            <div className="tab-content">
              <h2>Software Management</h2>
              <div className="software-management">
                <div className="management-tabs">
                  <button className="tab-btn active">All Software</button>
                  <button className="tab-btn">Pending Approval</button>
                  <button className="tab-btn">Approved</button>
                  <button className="tab-btn">Rejected</button>
                </div>
                <div className="software-list">
                  <p className="empty-state">No software uploaded yet. Software will appear here once sellers start uploading.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="tab-content">
              <h2>User Management</h2>
              <div className="user-management">
                <div className="user-filters">
                  <select>
                    <option value="">All Roles</option>
                    <option value="admin">Admin</option>
                    <option value="seller">Seller</option>
                    <option value="buyer">Buyer</option>
                  </select>
                  <select>
                    <option value="">All Status</option>
                    <option value="active">Active</option>
                    <option value="suspended">Suspended</option>
                  </select>
                  <input type="text" placeholder="Search users..." />
                </div>
                <div className="users-list">
                  <p className="empty-state">No users found. Users will appear here once they register.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="tab-content">
              <h2>Review Moderation</h2>
              <div className="review-moderation">
                <div className="moderation-tabs">
                  <button className="tab-btn active">All Reviews</button>
                  <button className="tab-btn">Pending Review</button>
                  <button className="tab-btn">Flagged</button>
                </div>
                <div className="reviews-list">
                  <p className="empty-state">No reviews to moderate yet. Reviews will appear here once users start reviewing software.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="tab-content">
              <h2>Analytics</h2>
              <div className="analytics-overview">
                <div className="analytics-stats">
                  <div className="stat-card">
                    <h3>Monthly Revenue</h3>
                    <p className="stat-number">$0.00</p>
                  </div>
                  <div className="stat-card">
                    <h3>Active Users</h3>
                    <p className="stat-number">0</p>
                  </div>
                  <div className="stat-card">
                    <h3>Downloads</h3>
                    <p className="stat-number">0</p>
                  </div>
                </div>
                <div className="analytics-charts">
                  <p className="empty-state">Analytics data will appear here once the platform has activity.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="tab-content">
              <h2>System Settings</h2>
              <div className="settings-form">
                <div className="form-group">
                  <label>Platform Commission (%)</label>
                  <input type="number" defaultValue="10" min="0" max="50" />
                </div>
                <div className="form-group">
                  <label>Max File Size (MB)</label>
                  <input type="number" defaultValue="1024" min="1" max="2048" />
                </div>
                <div className="form-group">
                  <label>Auto-approve Software</label>
                  <select defaultValue="false">
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Require Email Verification</label>
                  <select defaultValue="true">
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
                <button className="primary-btn">Save Settings</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard; 