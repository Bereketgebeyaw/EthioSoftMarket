import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SellerDashboard from './components/dashboard/SellerDashboard.jsx';
import BuyerDashboard from './components/dashboard/BuyerDashboard.jsx';
import AdminDashboard from './components/dashboard/AdminDashboard.jsx';
import LandingPage from './components/layout/LandingPage.jsx';
import ProtectedRoute from './components/auth/ProtectedRoute.jsx';
import AuthWrapper from './components/auth/AuthWrapper.jsx';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthWrapper />} />
        <Route path="/register" element={<AuthWrapper />} />
        
        {/* Protected Routes */}
        <Route 
          path="/seller" 
          element={
            <ProtectedRoute allowedRoles={['Seller']}>
              <SellerDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/buyer" 
          element={
            <ProtectedRoute allowedRoles={['Buyer']}>
              <BuyerDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute allowedRoles={['Admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* Catch all route - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App; 