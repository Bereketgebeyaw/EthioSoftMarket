import React, { useEffect, useState } from 'react';
import { authService } from '../services/api';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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
    window.location.reload();
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
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
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to EthioSoft Marketplace</h1>
        <div className="user-info">
          <span>Hello, {user.FullName}!</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </header>

      <div className="dashboard-content">
        <div className="user-details">
          <h2>Your Profile</h2>
          <div className="profile-card">
            <p><strong>Name:</strong> {user.FullName}</p>
            <p><strong>Email:</strong> {user.Email}</p>
            <p><strong>Role:</strong> {user.Role}</p>
            <p><strong>Member since:</strong> {new Date(user.CreatedAt).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="role-specific-content">
          {user.Role === 'Seller' && (
            <div className="seller-dashboard">
              <h2>Seller Dashboard</h2>
              <p>Welcome to your seller dashboard! Here you can:</p>
              <ul>
                <li>Upload and manage your software products</li>
                <li>View sales and download statistics</li>
                <li>Respond to customer reviews</li>
                <li>Manage your product listings</li>
              </ul>
              <button className="primary-btn">Upload New Software</button>
            </div>
          )}

          {user.Role === 'Buyer' && (
            <div className="buyer-dashboard">
              <h2>Buyer Dashboard</h2>
              <p>Welcome to your buyer dashboard! Here you can:</p>
              <ul>
                <li>Browse and search for software</li>
                <li>Purchase and download software</li>
                <li>View your purchase history</li>
                <li>Leave reviews for purchased software</li>
              </ul>
              <button className="primary-btn">Browse Software</button>
            </div>
          )}

          {user.Role === 'Admin' && (
            <div className="admin-dashboard">
              <h2>Admin Dashboard</h2>
              <p>Welcome to the admin dashboard! Here you can:</p>
              <ul>
                <li>Approve or reject software uploads</li>
                <li>Manage users and their roles</li>
                <li>View system analytics</li>
                <li>Moderate reviews and content</li>
              </ul>
              <button className="primary-btn">Manage Software</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 