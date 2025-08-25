# API Integration Documentation

This document explains the API integration setup for the Hawi Software frontend application.

## Overview

The application now includes a comprehensive API layer that connects to the backend server. The integration uses:

- **React Query** for data fetching, caching, and state management
- **Custom API client** for HTTP requests with authentication
- **TypeScript interfaces** for type safety
- **Error handling** with toast notifications
- **Authentication** with JWT tokens

## File Structure

```
src/
├── lib/
│   ├── api.ts          # API client and configuration
│   └── services.ts     # API service functions
├── hooks/
│   └── useApi.ts       # React Query hooks
└── env.example         # Environment variables template
```

## Environment Configuration

Create a `.env` file in the root directory with the following variables:

```env
# API Configuration
VITE_API_URL=http://localhost:3000/api

# Authentication
VITE_JWT_SECRET=your-jwt-secret-key

# Analytics
VITE_GA_TRACKING_ID=GA_MEASUREMENT_ID

# Error Tracking
VITE_SENTRY_DSN=SENTRY_DSN

# File Upload
VITE_MAX_FILE_SIZE=5242880
VITE_ALLOWED_FILE_TYPES=image/jpeg,image/png,image/gif,application/pdf

# Development
VITE_DEV_MODE=true
VITE_ENABLE_MOCK_API=false
```

## API Client (`src/lib/api.ts`)

The API client provides:

- **Base HTTP methods**: GET, POST, PUT, PATCH, DELETE
- **Authentication**: Automatic JWT token handling
- **Error handling**: Custom ApiError class
- **File uploads**: Progress tracking support
- **Request/response interceptors**: Automatic error handling

### Usage

```typescript
import { apiClient } from '@/lib/api';

// GET request
const data = await apiClient.get('/users');

// POST request
const result = await apiClient.post('/users', { name: 'John' });

// File upload with progress
const uploadResult = await apiClient.upload('/upload', file, (progress) => {
  console.log(`Upload progress: ${progress}%`);
});
```

## API Services (`src/lib/services.ts`)

Organized service functions for different features:

### Authentication Services
- `authService.login()` - User login
- `authService.register()` - User registration
- `authService.logout()` - User logout
- `authService.forgotPassword()` - Password reset request
- `authService.resetPassword()` - Password reset

### User Services
- `userService.getProfile()` - Get user profile
- `userService.updateProfile()` - Update user profile
- `userService.changePassword()` - Change password
- `userService.uploadAvatar()` - Upload profile picture

### Project Services
- `projectService.getProjects()` - Get user projects
- `projectService.createProject()` - Create new project
- `projectService.updateProject()` - Update project
- `projectService.deleteProject()` - Delete project

### Service Request Services
- `serviceRequestService.getServiceRequests()` - Get service requests
- `serviceRequestService.createServiceRequest()` - Create service request
- `serviceRequestService.submitFeedback()` - Submit feedback

### Message Services
- `messageService.getMessages()` - Get messages
- `messageService.createMessage()` - Send message
- `messageService.markAsRead()` - Mark message as read

### Blog Services
- `blogService.getBlogPosts()` - Get blog posts
- `blogService.createBlogPost()` - Create blog post
- `blogService.likeBlogPost()` - Like blog post
- `blogService.viewBlogPost()` - Record blog view

### Admin Services
- `adminService.getUsers()` - Get all users
- `adminService.getAnalytics()` - Get analytics data
- `adminService.getTeam()` - Get team members

## React Query Hooks (`src/hooks/useApi.ts`)

Custom hooks that provide:

- **Data fetching** with caching
- **Loading states** for UI feedback
- **Error handling** with toast notifications
- **Optimistic updates** for better UX
- **Automatic refetching** on window focus

### Available Hooks

#### Authentication Hooks
```typescript
const loginMutation = useLogin();
const registerMutation = useRegister();
const logoutMutation = useLogout();
const forgotPasswordMutation = useForgotPassword();
const resetPasswordMutation = useResetPassword();
```

#### User Hooks
```typescript
const { data: profile, isLoading } = useProfile();
const updateProfileMutation = useUpdateProfile();
const changePasswordMutation = useChangePassword();
const uploadAvatarMutation = useUploadAvatar();
```

#### Project Hooks
```typescript
const { data: projects, isLoading } = useProjects({ page: 1, limit: 10 });
const { data: project } = useProject(projectId);
const createProjectMutation = useCreateProject();
const updateProjectMutation = useUpdateProject();
const deleteProjectMutation = useDeleteProject();
```

#### Service Request Hooks
```typescript
const { data: serviceRequests } = useServiceRequests();
const createServiceRequestMutation = useCreateServiceRequest();
const submitFeedbackMutation = useSubmitFeedback();
```

#### Message Hooks
```typescript
const { data: messages } = useMessages();
const createMessageMutation = useCreateMessage();
const markAsReadMutation = useMarkMessageAsRead();
```

#### Blog Hooks
```typescript
const { data: blogPosts } = useBlogPosts({ featured: true });
const likeBlogPostMutation = useLikeBlogPost();
const viewBlogPostMutation = useViewBlogPost();
```

#### Admin Hooks
```typescript
const { data: users } = useAdminUsers();
const { data: analytics } = useAdminAnalytics();
const { data: team } = useAdminTeam();
```

## Usage Examples

### Login Component

```typescript
import { useLogin } from '@/hooks/useApi';

const Login = () => {
  const loginMutation = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const result = await loginMutation.mutateAsync({ 
        email, 
        password 
      });
      
      if (result.success) {
        // Navigate to dashboard
        navigate('/dashboard');
      }
    } catch (error) {
      // Error handling is automatic
    }
  };

  return (
    <Button 
      type="submit" 
      disabled={loginMutation.isPending}
    >
      {loginMutation.isPending ? 'Signing In...' : 'Sign In'}
    </Button>
  );
};
```

### Data Fetching Component

```typescript
import { useProjects } from '@/hooks/useApi';

const ProjectsList = () => {
  const { data: projects, isLoading, error } = useProjects();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading projects</div>;

  return (
    <div>
      {projects?.data?.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
```

### Form Submission

```typescript
import { useCreateProject } from '@/hooks/useApi';

const CreateProject = () => {
  const createProjectMutation = useCreateProject();

  const handleSubmit = async (formData) => {
    try {
      await createProjectMutation.mutateAsync(formData);
      // Form will be reset and success toast shown automatically
    } catch (error) {
      // Error toast shown automatically
    }
  };
};
```

## Error Handling

The API integration includes comprehensive error handling:

1. **Network errors** - Automatic retry with exponential backoff
2. **Authentication errors** - Automatic logout and redirect to login
3. **Validation errors** - Displayed as toast notifications
4. **Server errors** - Graceful degradation with user-friendly messages

## Authentication Flow

1. **Login** - JWT token stored in localStorage
2. **Automatic token inclusion** - All API requests include Authorization header
3. **Token refresh** - Automatic token refresh when expired
4. **Logout** - Token removed and cache cleared

## Caching Strategy

React Query provides intelligent caching:

- **Automatic caching** - Data cached by query key
- **Background updates** - Data refreshed in background
- **Stale-while-revalidate** - Show cached data while fetching fresh data
- **Cache invalidation** - Automatic cache updates after mutations

## File Upload

The API supports file uploads with progress tracking:

```typescript
const uploadMutation = useUploadImage();

const handleFileUpload = async (file: File) => {
  try {
    const result = await uploadMutation.mutateAsync(file);
    console.log('Upload successful:', result.data.url);
  } catch (error) {
    console.error('Upload failed:', error);
  }
};
```

## Backend API Requirements

The backend should implement these endpoints:

### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `POST /auth/logout` - User logout
- `POST /auth/refresh` - Refresh token
- `POST /auth/forgot-password` - Request password reset
- `POST /auth/reset-password` - Reset password

### Users
- `GET /users/profile` - Get user profile
- `PUT /users/profile` - Update user profile
- `POST /users/change-password` - Change password
- `POST /users/avatar` - Upload avatar

### Projects
- `GET /projects` - Get projects (with pagination)
- `POST /projects` - Create project
- `GET /projects/:id` - Get project details
- `PUT /projects/:id` - Update project
- `DELETE /projects/:id` - Delete project
- `PATCH /projects/:id/status` - Update project status

### Service Requests
- `GET /service-requests` - Get service requests
- `POST /service-requests` - Create service request
- `GET /service-requests/:id` - Get service request details
- `PUT /service-requests/:id` - Update service request
- `DELETE /service-requests/:id` - Delete service request
- `POST /service-requests/:id/feedback` - Submit feedback

### Messages
- `GET /messages` - Get messages
- `POST /messages` - Send message
- `GET /messages/:id` - Get message details
- `DELETE /messages/:id` - Delete message
- `PATCH /messages/:id/read` - Mark as read

### Blog
- `GET /blog` - Get blog posts
- `POST /blog` - Create blog post
- `GET /blog/:id` - Get blog post details
- `PUT /blog/:id` - Update blog post
- `DELETE /blog/:id` - Delete blog post
- `POST /blog/:id/like` - Like blog post
- `POST /blog/:id/view` - Record view

### Admin
- `GET /admin/users` - Get all users
- `GET /admin/analytics` - Get analytics
- `GET /admin/team` - Get team members
- `POST /admin/team` - Add team member
- `PUT /admin/team/:id` - Update team member
- `DELETE /admin/team/:id` - Delete team member

### Contact
- `POST /contact` - Submit contact form

### File Upload
- `POST /upload/image` - Upload image
- `POST /upload/document` - Upload document

## Response Format

All API responses should follow this format:

```typescript
interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
```

## Testing

To test the API integration:

1. **Start the backend server** on the configured port
2. **Set environment variables** in `.env` file
3. **Run the frontend** with `npm run dev`
4. **Test authentication** by logging in
5. **Test data fetching** by navigating to dashboard
6. **Test form submissions** by creating projects/requests

## Troubleshooting

### Common Issues

1. **CORS errors** - Ensure backend allows frontend origin
2. **Authentication errors** - Check JWT token format and expiration
3. **Network errors** - Verify API URL and server status
4. **Type errors** - Ensure TypeScript interfaces match backend schema

### Debug Mode

Enable debug mode by setting `VITE_DEV_MODE=true` to see detailed API logs in the console.

## Security Considerations

1. **HTTPS** - Use HTTPS in production
2. **Token storage** - JWT tokens stored in localStorage (consider httpOnly cookies for production)
3. **Input validation** - Validate all user inputs
4. **Rate limiting** - Implement rate limiting on backend
5. **CORS** - Configure CORS properly on backend

## Performance Optimization

1. **Query caching** - React Query provides automatic caching
2. **Pagination** - Use pagination for large datasets
3. **Lazy loading** - Load data only when needed
4. **Optimistic updates** - Update UI immediately, sync with server
5. **Background sync** - Refresh data in background

This API integration provides a robust foundation for the Hawi Software frontend application with proper error handling, caching, and user experience optimizations.
