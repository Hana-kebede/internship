# Hawi Software Fullstack Application Setup

This document explains how to set up and run the fullstack application with React frontend and Laravel backend.

## 🏗️ Architecture

- **Frontend**: React + TypeScript + Vite + Tailwind CSS + Shadcn/ui
- **Backend**: Laravel 10 + MySQL + Sanctum Authentication
- **Communication**: RESTful API with JSON responses

## 📋 Prerequisites

### Frontend Requirements
- Node.js 18+ 
- npm or yarn
- Modern web browser

### Backend Requirements
- PHP 8.1+
- Composer
- MySQL 8.0+
- Laravel 10

## 🚀 Quick Start

### Option 1: Use the Batch Script (Windows)
```bash
# Double-click the file or run in command prompt
start-fullstack.bat
```

### Option 2: Manual Start

#### 1. Start Laravel Backend
```bash
cd interns-backend-main
php artisan serve --host=127.0.0.1 --port=8000
```

#### 2. Start React Frontend (in new terminal)
```bash
npm run dev
```

### Option 3: Use NPM Scripts
```bash
# Start both servers concurrently
npm run dev:fullstack

# Or start them separately
npm run dev:backend  # Backend only
npm run dev          # Frontend only
```

## 🔧 Configuration

### Frontend Environment
The frontend is configured to connect to the Laravel backend at `http://127.0.0.1:8000/api`.

Key configuration files:
- `env.local` - Local environment variables
- `src/lib/config.ts` - Application configuration
- `src/lib/api.ts` - API client configuration

### Backend Environment
The Laravel backend should have:
- Database configured in `.env`
- CORS configured for frontend domain
- Sanctum authentication enabled

## 🌐 API Endpoints

### Public Endpoints
- `GET /api/home` - Welcome message
- `GET /api/about` - Company information
- `GET /api/services` - Available services
- `GET /api/contact` - Contact information
- `GET /api/blog` - Blog posts

### Authentication Endpoints
- `POST /api/login` - User login
- `POST /api/register` - User registration
- `POST /api/logout` - User logout
- `POST /api/forgot-password` - Password reset
- `POST /api/reset-password` - Password reset confirmation

### Protected Endpoints (require authentication)
- `GET /api/user` - User profile
- `PUT /api/user` - Update profile
- `GET /api/userprojects` - User projects
- `GET /api/user_service-requests` - Service requests
- `GET /api/usermessages` - User messages

### Admin Endpoints
- `GET /api/users` - User management
- `GET /api/overview` - Analytics dashboard
- `GET /api/team-members` - Team management
- `GET /api/admin/projects` - Project management
- `GET /api/admin/services` - Service request management

## 🔐 Authentication

The application uses Laravel Sanctum for authentication:

1. **Login/Register**: Get authentication token
2. **Token Storage**: Token stored in localStorage
3. **API Calls**: Token automatically included in Authorization header
4. **Token Refresh**: Automatic token refresh mechanism

## 📁 Project Structure

```
Frontend-HawiSoftware/
├── src/
│   ├── components/          # React components
│   ├── lib/
│   │   ├── api.ts          # API client & endpoints
│   │   ├── config.ts       # Configuration
│   │   └── services.ts     # API service functions
│   ├── pages/              # Page components
│   └── hooks/              # Custom React hooks
├── interns-backend-main/    # Laravel backend
├── env.local               # Frontend environment
├── start-fullstack.bat     # Windows startup script
└── package.json            # Frontend dependencies
```

## 🧪 Testing the Connection

### 1. Backend Status Component
The `BackendStatus` component automatically tests the connection and displays:
- Connection status (Connected/Disconnected)
- Backend response data
- Error messages if connection fails

### 2. Manual Testing
```bash
# Test backend health
curl http://127.0.0.1:8000/api/home

# Test with authentication
curl -H "Authorization: Bearer YOUR_TOKEN" http://127.0.0.1:8000/api/user
```

## 🚨 Troubleshooting

### Common Issues

#### 1. Backend Not Starting
```bash
# Check PHP version
php --version

# Check Composer dependencies
cd interns-backend-main
composer install

# Check Laravel requirements
php artisan --version
```

#### 2. Frontend Can't Connect to Backend
- Verify backend is running on port 8000
- Check CORS configuration in Laravel
- Ensure firewall allows local connections
- Check browser console for CORS errors

#### 3. Database Connection Issues
```bash
# Check database configuration
cd interns-backend-main
php artisan config:cache
php artisan migrate:status
```

#### 4. Authentication Issues
- Verify Sanctum is properly configured
- Check token storage in localStorage
- Ensure API routes are protected correctly

### Debug Mode
Enable debug mode in frontend:
```bash
# Set environment variable
VITE_DEV_MODE=true
```

## 📚 Development Workflow

### 1. Making API Changes
1. Update Laravel routes in `interns-backend-main/routes/api.php`
2. Create/update controllers as needed
3. Update frontend services in `src/lib/services.ts`
4. Update frontend endpoints in `src/lib/api.ts`

### 2. Adding New Features
1. Create Laravel models, migrations, and controllers
2. Add API routes
3. Update frontend types and services
4. Create React components
5. Test full integration

### 3. Testing
1. Test backend endpoints with Postman/Insomnia
2. Test frontend components in isolation
3. Test full integration
4. Check error handling and edge cases

## 🔄 API Response Format

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "message": "Optional message"
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error message",
  "data": null
}
```

### Paginated Response
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
}
```

## 🚀 Deployment

### Frontend
```bash
npm run build
# Deploy dist/ folder to web server
```

### Backend
```bash
# Set production environment
APP_ENV=production
APP_DEBUG=false

# Optimize for production
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review Laravel and React documentation
3. Check browser console and Laravel logs
4. Verify all prerequisites are met

## 🔗 Useful Links

- [Laravel Documentation](https://laravel.com/docs)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)

