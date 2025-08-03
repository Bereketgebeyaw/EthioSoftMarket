# EthioSoft Marketplace - Frontend

A modern React application for Ethiopia's premier software marketplace, connecting developers with buyers.

## Project Structure

```
src/
├── components/
│   ├── auth/                 # Authentication components
│   │   ├── LoginForm.jsx
│   │   └── RegisterForm.jsx
│   ├── dashboard/            # Dashboard components
│   │   ├── Dashboard.jsx     # Main dashboard router
│   │   ├── SellerDashboard.jsx
│   │   ├── BuyerDashboard.jsx
│   │   └── AdminDashboard.jsx
│   ├── layout/               # Layout components
│   │   ├── Header.jsx        # Reusable header
│   │   ├── Footer.jsx        # Reusable footer
│   │   └── LandingPage.jsx   # Landing page
│   └── common/               # Common/shared components
├── services/
│   └── api.js               # API service functions
├── styles/                  # CSS files
│   ├── App.css
│   ├── LandingPage.css
│   ├── Header.css
│   └── Footer.css
├── App.jsx                  # Main application component
└── index.jsx               # Application entry point
```

## Features

### Landing Page

- **Hero Section**: Showcases the marketplace with compelling copy and CTAs
- **Features Section**: Highlights benefits for developers and buyers
- **How It Works**: Step-by-step process explanation
- **Categories Preview**: Popular software categories
- **Call-to-Action**: Encourages user registration

### Authentication

- **User Registration**: Sign up as Developer, Buyer, or Admin
- **User Login**: Secure authentication with JWT tokens
- **Role-based Access**: Different dashboards based on user role

### Dashboards

- **Seller Dashboard**: Upload software, manage products, view sales
- **Buyer Dashboard**: Browse software, make purchases, download files
- **Admin Dashboard**: Manage users, moderate content, view analytics

## Components

### Reusable Components

- **Header**: Fixed navigation with login/register buttons
- **Footer**: Comprehensive footer with links and social media
- **LandingPage**: Complete landing page with all sections

### Authentication Components

- **LoginForm**: User login with email/password
- **RegisterForm**: User registration with role selection

### Dashboard Components

- **Dashboard**: Routes users to appropriate dashboard based on role
- **SellerDashboard**: Complete seller interface
- **BuyerDashboard**: Complete buyer interface
- **AdminDashboard**: Complete admin interface

## Styling

The application uses a modern, responsive design with:

- **CSS Grid & Flexbox**: For responsive layouts
- **CSS Variables**: For consistent theming
- **Mobile-first**: Responsive design approach
- **Smooth Animations**: Enhanced user experience

## Getting Started

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Start Development Server**:

   ```bash
   npm start
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## API Integration

The frontend communicates with the ASP.NET Core backend API:

- **Base URL**: `http://localhost:5165/api`
- **Authentication**: JWT Bearer tokens
- **Endpoints**: Auth, Software, Orders, Reviews, etc.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Guidelines

### File Naming

- Use PascalCase for component files: `ComponentName.jsx`
- Use camelCase for utility files: `utilityName.js`
- Use kebab-case for CSS files: `component-name.css`

### Component Structure

- One component per file
- Export as default
- Include PropTypes for type checking (when needed)

### CSS Organization

- Component-specific styles in separate CSS files
- Global styles in `App.css`
- Use BEM methodology for class naming

## Contributing

1. Follow the existing file structure
2. Use consistent naming conventions
3. Add proper comments and documentation
4. Test on multiple screen sizes
5. Ensure accessibility standards

## License

This project is part of the EthioSoft Marketplace platform.
