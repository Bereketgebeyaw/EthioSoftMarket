# EthioSoft Marketplace

A full-stack digital marketplace for Ethiopian software developers to sell their software products and customers to browse, purchase, and download them.

## 🚀 Features

- **User Authentication**: Register and login with JWT tokens
- **Role-based Access**: Admin, Seller, and Buyer roles
- **Software Management**: Upload, manage, and approve software
- **Payment Integration**: Support for Ethiopian payment methods
- **Modern UI**: Responsive React frontend with beautiful design

## 🛠️ Technology Stack

### Backend

- **ASP.NET Core 9.0** - Web API framework
- **Entity Framework Core** - ORM for database operations
- **SQLite** - Database (easy to switch to PostgreSQL)
- **JWT Authentication** - Secure token-based authentication
- **ASP.NET Identity** - User management system

### Frontend

- **React 18** - User interface library
- **TypeScript** - Type-safe JavaScript
- **Axios** - HTTP client for API calls
- **CSS3** - Modern styling with gradients and animations

## 📁 Project Structure

```
EthioSoft-Marketplace/
├── EthioSoft.API/           # Backend API
│   ├── Controllers/         # API endpoints
│   ├── Models/             # Entity models
│   ├── DTOs/               # Data transfer objects
│   ├── Services/           # Business logic
│   ├── Data/               # Database context
│   └── Configurations/     # App settings
└── ethiosoft-client/       # React frontend
    ├── src/
    │   ├── components/     # React components
    │   ├── services/       # API services
    │   └── types/          # TypeScript types
    └── public/             # Static files
```

## 🚀 Quick Start

### Prerequisites

- .NET 9.0 SDK
- Node.js 16+ and npm
- Modern web browser

### Backend Setup

1. **Navigate to the API directory:**

   ```bash
   cd EthioSoft.API
   ```

2. **Install dependencies:**

   ```bash
   dotnet restore
   ```

3. **Run the API:**

   ```bash
   dotnet run
   ```

4. **Access the API:**
   - API: https://localhost:7000
   - Swagger Docs: https://localhost:7000/swagger

### Frontend Setup

1. **Navigate to the client directory:**

   ```bash
   cd ethiosoft-client
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

4. **Access the application:**
   - Frontend: http://localhost:3000

## 🔐 Authentication

### Default Admin User

- **Email**: admin@ethiosoft.com
- **Password**: (set during first run)
- **Role**: Admin

### User Roles

- **Admin**: Approve software, manage users, view analytics
- **Seller**: Upload and manage software products
- **Buyer**: Browse, purchase, and download software

## 📊 Database Schema

### Core Entities

- **Users**: Authentication and user management
- **Categories**: Software categorization
- **Software**: Product information and files
- **Orders**: Purchase transactions
- **Downloads**: Download tracking
- **Reviews**: User ratings and comments

## 🔧 Configuration

### Backend Configuration (`appsettings.json`)

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=EthioSoftMarketplace.db"
  },
  "JwtSettings": {
    "SecretKey": "your-secret-key",
    "Issuer": "EthioSoft-Marketplace",
    "Audience": "EthioSoft-Marketplace-Users",
    "ExpirationInMinutes": 60
  }
}
```

### Frontend Configuration

- API Base URL: `https://localhost:7000/api`
- Proxy configured for development

## 🎨 Features in Development

- [ ] Software upload with file validation
- [ ] Payment integration (Telebirr, Chapa, CBE-Birr)
- [ ] Advanced search and filtering
- [ ] Review and rating system
- [ ] Admin dashboard with analytics
- [ ] Email notifications
- [ ] License key generation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Bereket Gebeyaw** - Software Developer

---

## 🎯 Next Steps

1. **Test the authentication system** by registering a new user
2. **Explore the dashboard** based on your user role
3. **Add software products** (if you're a seller)
4. **Browse and purchase software** (if you're a buyer)
5. **Manage the marketplace** (if you're an admin)

Happy coding! 🚀
