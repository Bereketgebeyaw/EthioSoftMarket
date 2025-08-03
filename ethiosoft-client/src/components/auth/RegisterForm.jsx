import React, { useState } from 'react';
import { authService } from '../../services/api';

const RegisterForm = ({ onSuccess, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    Email: '',
    Password: '',
    FullName: '',
    Role: 'Buyer'
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await authService.register(formData);
      setRegistrationSuccess(true);
      // Don't automatically log in - redirect to login page
      setTimeout(() => {
        onSwitchToLogin();
      }, 2000); // Show success message for 2 seconds then redirect
    } catch (err) {
      console.error('Registration error:', err);
      if (err.response?.data?.errors) {
        // Display specific validation errors
        const errorMessages = err.response.data.errors.map(error => error.description).join(', ');
        setError(`Registration failed: ${errorMessages}`);
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError('Registration failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (registrationSuccess) {
    return (
      <div className="auth-form">
        <div className="success-message">
          <h2>Registration Successful! 🎉</h2>
          <p>Your account has been created successfully.</p>
          <p>Redirecting you to login page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-form">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="FullName">Full Name</label>
          <input
            type="text"
            id="FullName"
            name="FullName"
            value={formData.FullName}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            id="Email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="Password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />
          <small className="password-requirements">
            Password must contain at least 6 characters, including uppercase, lowercase, and a digit.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="Role">Role</label>
          <select
            id="Role"
            name="Role"
            value={formData.Role}
            onChange={handleChange}
            required
          >
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" disabled={isLoading} className="auth-button">
          {isLoading ? 'Creating Account...' : 'Register'}
        </button>
      </form>

      <div className="auth-switch">
        Already have an account?{' '}
        <button type="button" onClick={onSwitchToLogin} className="link-button">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default RegisterForm; 