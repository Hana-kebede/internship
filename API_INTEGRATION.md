# API Integration Guide - Frontend to Laravel Backend

This guide explains how to connect your React frontend with the Laravel backend.

## 🚀 Quick Setup

### 1. Backend Setup (Laravel)

First, ensure your Laravel backend is running:

```bash
# Navigate to backend directory
cd "C:\Users\Hana\OneDrive\Desktop\demo\interns-backend-main"

# Install dependencies
composer install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Configure database in .env file
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3307
DB_DATABASE=hawi_website
DB_USERNAME=root
DB_PASSWORD=87654321

# Run migrations
php artisan migrate

# Start the development server
php artisan serve
```

The backend will be available at: `http://localhost:8000`

### 2. Frontend Setup (React)

Your frontend is already configured to connect to the Laravel backend:

```bash
# Install dependencies (if not already done)
npm install

# Start the development server
npm run dev
```

The frontend will be available at: `http://localhost:5173`

## 🔧 Configuration

### Environment Variables

The frontend uses the following environment variables (already configured in `.env`):

```env
VITE_API_URL=http://localhost:8000/api
VITE_ENABLE_MOCK_API=false
```

### API Base URL

The API base URL is configured to point to your Laravel backend:
- **Development**: `http://localhost:8000/api`
- **Production**: Update `VITE_API_URL` in your production environment

## 📡 API Endpoints

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/login` | User login |
| POST | `/api/register` | User registration |
| POST | `/api/logout` | User logout |
| POST | `/api/forgot-password` | Send password reset |
| POST | `/api/reset-password` | Reset password |

### User Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/user` | Get user profile |
| PUT | `/api/user` | Update user profile |

### Project Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/userprojects` | List user projects |
| GET | `/api/userprojects/{id}` | Get specific project |
| POST | `/api/userprojects` | Create new project |
| PUT | `/api/userprojects/{id}` | Update project |
| DELETE | `/api/userprojects/{id}` | Delete project |

### Service Request Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/user_service-requests` | List service requests |
| GET | `/api/user_service-requests/{id}` | Get specific request |
| POST | `/api/user_service-requests` | Create new request |
| PUT | `/api/user_service-requests/{id}` | Update request |
| DELETE | `/api/user_service-requests/{id}` | Delete request |

### Message Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/usermessages` | List messages |
| GET | `/api/usermessages/{id}` | Get specific message |
| POST | `/api/usermessages` | Send new message |

### Blog Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/blog` | List blog posts |
| GET | `/api/blogs/{id}` | Get specific post |
| POST | `/api/blogs` | Create new post |
| PUT | `/api/blogs/{id}` | Update post |
| DELETE | `/api/blogs/{id}` | Delete post |
| POST | `/api/blogs/{id}/increment-likes` | Like a post |
| POST | `/api/blogs/{id}/increment-views` | View a post |

### Admin Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/overview` | Admin dashboard overview |
| GET | `/api/users` | List all users |
| GET | `/api/admin/projects` | List all projects |
| GET | `/api/admin/services` | List all service requests |
| GET | `/api/admin/messages` | List all messages |
| GET | `/api/team-members` | List team members |
| GET | `/api/blogs` | List all blog posts |

## 🔐 Authentication

The frontend uses Laravel Sanctum for authentication. Here's how it works:

### Login Process

1. User submits login form
2. Frontend sends POST request to `/api/login`
3. Backend validates credentials and returns token
4. Frontend stores token in localStorage
5. Token is automatically included in subsequent requests

### Token Management

```typescript
// Store token after login
auth.setToken(response.data.token);

// Include token in requests (automatic)
const config = {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
};
```

### Protected Routes

All protected endpoints require the `auth:sanctum` middleware on the backend and a valid token on the frontend.

## 📊 Data Flow

### Example: User Dashboard

1. **Frontend**: User navigates to dashboard
2. **Frontend**: Makes authenticated request to `/api/userprojects`
3. **Backend**: Validates token and returns user's projects
4. **Frontend**: Displays projects in the UI

### Example: Creating a Service Request

1. **Frontend**: User fills out service request form
2. **Frontend**: Sends POST request to `/api/user_service-requests`
3. **Backend**: Validates data and creates request
4. **Backend**: Returns success response with new request data
5. **Frontend**: Updates UI to show new request

## 🛠️ Error Handling

The frontend includes comprehensive error handling:

```typescript
try {
  const response = await apiClient.post(endpoints.serviceRequests.create, data);
  // Handle success
} catch (error) {
  if (error instanceof ApiError) {
    // Handle API errors
    console.error(`API Error ${error.status}: ${error.message}`);
  } else {
    // Handle network errors
    console.error('Network error:', error);
  }
}
```

## 🔄 CORS Configuration

The Laravel backend should be configured to allow requests from your frontend:

```php
// config/cors.php
return [
    'paths' => ['api/*'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['http://localhost:5173'], // Frontend URL
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,
];
```

## 🧪 Testing the Connection

### 1. Test Backend Health

```bash
curl http://localhost:8000/api/home
```

Expected response:
```json
{
  "title": "Welcome to Hawi Software Solutions",
  "message": "We build modern software solutions."
}
```

### 2. Test Frontend Connection

1. Start both servers
2. Open browser to `http://localhost:5173`
3. Try to login or register
4. Check browser network tab for API calls

### 3. Common Issues

**CORS Error**: Ensure Laravel CORS is configured correctly
**401 Unauthorized**: Check if token is being sent correctly
**404 Not Found**: Verify API endpoints match between frontend and backend

## 📝 Development Workflow

1. **Backend Changes**: Update Laravel routes/controllers
2. **Frontend Changes**: Update API endpoints in `src/lib/api.ts`
3. **Testing**: Test both frontend and backend together
4. **Deployment**: Update environment variables for production

## 🚀 Production Deployment

### Frontend Environment Variables

```env
VITE_API_URL=https://your-backend-domain.com/api
VITE_ENABLE_MOCK_API=false
```

### Backend Environment Variables

```env
APP_URL=https://your-backend-domain.com
CORS_ALLOWED_ORIGINS=https://your-frontend-domain.com
```

## 📚 Additional Resources

- [Laravel Sanctum Documentation](https://laravel.com/docs/sanctum)
- [React API Integration Best Practices](https://react.dev/learn/start-a-new-react-project)
- [CORS Configuration](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

---

**Note**: This integration assumes your Laravel backend is properly configured with Sanctum authentication and the necessary middleware. If you encounter issues, check the Laravel logs and ensure all dependencies are installed.
