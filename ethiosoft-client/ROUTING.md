# EthioSoft Marketplace - Routing System

## Overview

The application now uses React Router for proper URL-based navigation, providing clean URLs and better user experience.

## URL Structure

### Public Routes

- **`/`** - Landing page (home)
- **`/login`** - Login form
- **`/register`** - Registration form

### Protected Routes (Role-based)

- **`/seller`** - Seller Dashboard (Seller role only)
- **`/buyer`** - Buyer Dashboard (Buyer role only)
- **`/admin`** - Admin Dashboard (Admin role only)

## Features

### 🔐 **Authentication & Authorization**

- **Protected Routes**: Users must be authenticated to access dashboard routes
- **Role-based Access**: Each dashboard is restricted to specific user roles
- **Automatic Redirects**: Users are redirected to appropriate dashboard based on their role

### 🧭 **Navigation**

- **Clean URLs**: Professional URL structure
- **Browser History**: Users can use back/forward buttons
- **Direct Access**: Users can bookmark specific pages
- **Automatic Redirects**: Invalid routes redirect to home page

### 🔄 **User Flow**

#### New User Journey:

1. **Landing Page** (`/`) - User sees marketplace overview
2. **Register** (`/register`) - User creates account
3. **Role-based Dashboard** - Automatically redirected to appropriate dashboard:
   - Seller → `/seller`
   - Buyer → `/buyer`
   - Admin → `/admin`

#### Returning User Journey:

1. **Login** (`/login`) - User signs in
2. **Role-based Dashboard** - Automatically redirected based on role

#### Unauthorized Access:

- Users trying to access wrong dashboard are automatically redirected
- Example: Buyer trying to access `/seller` → redirected to `/buyer`

## Components

### **ProtectedRoute**

- Wraps protected dashboard components
- Checks authentication status
- Validates user role
- Redirects unauthorized users

### **AuthWrapper**

- Handles login/register forms
- Manages authentication state
- Redirects to appropriate dashboard after successful auth

### **Loading Component**

- Shows loading states during authentication checks
- Provides better user experience
- Customizable loading messages

## Implementation Details

### Route Protection

```jsx
<Route
  path="/seller"
  element={
    <ProtectedRoute allowedRoles={["Seller"]}>
      <SellerDashboard />
    </ProtectedRoute>
  }
/>
```

### Navigation

```jsx
// Programmatic navigation
const navigate = useNavigate();
navigate("/seller"); // Navigate to seller dashboard
navigate("/"); // Navigate to home
```

### Authentication Flow

1. User logs in/registers
2. Token stored in localStorage
3. User redirected to role-appropriate dashboard
4. ProtectedRoute validates token and role
5. Dashboard renders if authorized

## Benefits

### 🎯 **User Experience**

- **Intuitive URLs**: Users understand where they are
- **Bookmarkable Pages**: Users can save specific pages
- **Browser Navigation**: Back/forward buttons work properly
- **Loading States**: Clear feedback during authentication

### 🔒 **Security**

- **Route Protection**: Unauthorized access prevented
- **Role Validation**: Users can only access appropriate areas
- **Token Validation**: Authentication checked on each protected route

### 🛠️ **Development**

- **Clean Architecture**: Separation of concerns
- **Reusable Components**: ProtectedRoute can be used anywhere
- **Easy Testing**: Routes can be tested independently
- **Scalable**: Easy to add new routes and roles

## Usage Examples

### Adding New Protected Route

```jsx
<Route
  path="/new-feature"
  element={
    <ProtectedRoute allowedRoles={["Admin", "Seller"]}>
      <NewFeatureComponent />
    </ProtectedRoute>
  }
/>
```

### Navigation in Components

```jsx
const navigate = useNavigate();

// Navigate to specific route
navigate("/seller");

// Navigate with state
navigate("/buyer", { state: { from: "checkout" } });

// Go back
navigate(-1);
```

### Custom Loading States

```jsx
<Loading message="Authenticating..." className="full-page" />
<Loading message="Loading data..." className="small" />
```

## Error Handling

- **404 Routes**: Redirect to home page
- **Authentication Errors**: Redirect to login
- **Role Mismatch**: Redirect to appropriate dashboard
- **Network Errors**: Show error messages with retry options

This routing system provides a professional, secure, and user-friendly navigation experience for the EthioSoft Marketplace application.
