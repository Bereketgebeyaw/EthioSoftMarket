import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5164/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data);
    
    // Handle authentication errors
    if (error.response?.status === 401 || error.response?.status === 404) {
      // Clear invalid token and user data
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      // Only redirect if we're not already on the login page
      if (!window.location.pathname.includes('/login')) {
        window.location.reload(); // Reload to show login form
      }
    }
    
    return Promise.reject(error);
  }
);

export const authService = {
  register: async (data) => {
    console.log('Sending registration data:', data);
    const response = await api.post('/auth/register', data);
    console.log('Registration response:', response.data);
    return response.data;
  },

  login: async (data) => {
    console.log('Sending login data:', data);
    const response = await api.post('/auth/login', data);
    console.log('Login response:', response.data);
    return response.data;
  },

  getCurrentUser: async () => {
    try {
      const response = await api.get('/auth/me');
      return response.data;
    } catch (error) {
      // If user not found, clear token and throw error
      if (error.response?.status === 404) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        throw new Error('User not found. Please login again.');
      }
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};

export default api; 