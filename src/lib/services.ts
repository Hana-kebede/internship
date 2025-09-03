import { apiClient, endpoints, ApiResponse, PaginatedResponse } from './api';

// Types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin' | 'team';
  profilePic?: string;
  phone?: string;
  company?: string;
  joinedDate: string;
  status: 'active' | 'inactive';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'planning' | 'in-progress' | 'review' | 'testing' | 'completed';
  progress: number;
  priority: 'low' | 'medium' | 'high';
  budget: number;
  spent: number;
  startDate: string;
  endDate: string;
  clientId: string;
  clientName: string;
  assignedTeam?: string[];
}

export interface ServiceRequest {
  id: string;
  title: string;
  description: string;
  type: 'bug-fix' | 'feature-request' | 'support' | 'maintenance';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  clientId: string;
  clientName: string;
  createdAt: string;
  updatedAt: string;
  assignedTo?: string;
  feedback?: string;
  rating?: number;
}

export interface Message {
  id: string;
  subject: string;
  content: string;
  fromId: string;
  fromName: string;
  toId: string;
  toName: string;
  isRead: boolean;
  createdAt: string;
  attachments?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
  likes: number;
  views: number;
  coverImage?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  company?: string;
  phone?: string;
}

export interface UpdateProfileData {
  name?: string;
  phone?: string;
  company?: string;
}

export interface CreateProjectData {
  title: string;
  description: string;
  budget: number;
  startDate: string;
  endDate: string;
  priority: 'low' | 'medium' | 'high';
}

export interface CreateServiceRequestData {
  title: string;
  description: string;
  type: 'bug-fix' | 'feature-request' | 'support' | 'maintenance';
  priority: 'low' | 'medium' | 'high' | 'urgent';
}

export interface CreateMessageData {
  subject: string;
  content: string;
  toId: string;
  attachments?: File[];
}

export interface CreateBlogPostData {
  title: string;
  content: string;
  excerpt: string;
  category: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  coverImage?: File;
}

// Helper function to handle Laravel responses
const handleLaravelResponse = <T>(response: any): T => {
  // Laravel typically returns data directly or in a 'data' field
  if (response.data !== undefined) {
    return response.data;
  }
  return response;
};

// Auth Services
export const authService = {
  login: async (credentials: LoginCredentials): Promise<ApiResponse<{ user: User; token: string }>> => {
    try {
      const response = await apiClient.post(endpoints.auth.login, credentials);
      const data = handleLaravelResponse<{ user: User; token: string }>(response);
      return {
        success: true,
        data
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Login failed',
        data: { user: {} as User, token: '' }
      };
    }
  },

  register: async (data: RegisterData): Promise<ApiResponse<{ user: User; token: string }>> => {
    try {
      const response = await apiClient.post(endpoints.auth.register, data);
      const respData = handleLaravelResponse<{ user: User; token: string }>(response);
      return {
        success: true,
        data: respData
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Registration failed',
        data: { user: {} as User, token: '' }
      };
    }
  },

  logout: async (): Promise<ApiResponse> => {
    try {
      await apiClient.post(endpoints.auth.logout);
      return { success: true };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Logout failed'
      };
    }
  },

  refreshToken: async (): Promise<ApiResponse<{ token: string }>> => {
    try {
      const response = await apiClient.post(endpoints.auth.refresh);
      const data = handleLaravelResponse<{ token: string }>(response);
      return {
        success: true,
        data
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Token refresh failed',
        data: { token: '' }
      };
    }
  },

  forgotPassword: async (email: string): Promise<ApiResponse> => {
    try {
      await apiClient.post(endpoints.auth.forgotPassword, { email });
      return { success: true };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Password reset failed'
      };
    }
  },

  resetPassword: async (token: string, password: string): Promise<ApiResponse> => {
    try {
      await apiClient.post(endpoints.auth.resetPassword, { token, password });
      return { success: true };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Password reset failed'
      };
    }
  },

  verifyEmail: async (token: string): Promise<ApiResponse> => {
    try {
      await apiClient.post(endpoints.auth.verifyEmail, { token });
      return { success: true };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Email verification failed'
      };
    }
  },
};

// User Services
export const userService = {
  getProfile: async (): Promise<ApiResponse<User>> => {
    try {
      const response = await apiClient.get(endpoints.users.profile);
      return {
        success: true,
        data: handleLaravelResponse<User>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to get profile'
      };
    }
  },

  updateProfile: async (data: UpdateProfileData): Promise<ApiResponse<User>> => {
    try {
      const response = await apiClient.put(endpoints.users.updateProfile, data);
      return {
        success: true,
        data: handleLaravelResponse<User>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to update profile'
      };
    }
  },

  changePassword: async (currentPassword: string, newPassword: string): Promise<ApiResponse> => {
    try {
      await apiClient.post(endpoints.users.changePassword, { currentPassword, newPassword });
      return { success: true };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Password change failed'
      };
    }
  },

  uploadAvatar: async (file: File): Promise<ApiResponse<{ profilePic: string }>> => {
    try {
      const response = await apiClient.upload(endpoints.users.uploadAvatar, file);
      return {
        success: true,
        data: handleLaravelResponse<{ profilePic: string }>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Avatar upload failed'
      };
    }
  },
};

// Project Services
export const projectService = {
  getProjects: async (params?: {
    page?: number;
    limit?: number;
    status?: string;
    search?: string;
  }): Promise<PaginatedResponse<Project>> => {
    try {
      const response = await apiClient.get(endpoints.projects.list, params);
      const respAny = response as any;
      const data = respAny && respAny.data ? respAny.data : respAny;
      const meta = respAny && respAny.meta ? respAny.meta : (data && data.meta ? data.meta : undefined);
      return {
        success: true,
        data: handleLaravelResponse<Project[]>(response),
        pagination: meta || { page: 1, limit: 10, total: 0, totalPages: 1 }
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to get projects',
        data: [],
        pagination: { page: 1, limit: 10, total: 0, totalPages: 1 }
      };
    }
  },

  getProject: async (id: string): Promise<ApiResponse<Project>> => {
    try {
      const response = await apiClient.get(endpoints.projects.get(id));
      return {
        success: true,
        data: handleLaravelResponse<Project>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to get project'
      };
    }
  },

  createProject: async (data: CreateProjectData): Promise<ApiResponse<Project>> => {
    try {
      const response = await apiClient.post(endpoints.projects.create, data);
      return {
        success: true,
        data: handleLaravelResponse<Project>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to create project'
      };
    }
  },

  updateProject: async (id: string, data: Partial<CreateProjectData>): Promise<ApiResponse<Project>> => {
    try {
      const response = await apiClient.put(endpoints.projects.update(id), data);
      return {
        success: true,
        data: handleLaravelResponse<Project>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to update project'
      };
    }
  },

  deleteProject: async (id: string): Promise<ApiResponse> => {
    try {
      await apiClient.delete(endpoints.projects.delete(id));
      return { success: true };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to delete project'
      };
    }
  },

  updateProjectStatus: async (id: string, status: Project['status']): Promise<ApiResponse<Project>> => {
    try {
      const response = await apiClient.patch(endpoints.projects.status(id), { status });
      return {
        success: true,
        data: handleLaravelResponse<Project>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to update project status'
      };
    }
  },
};

// Service Request Services
export const serviceRequestService = {
  getServiceRequests: async (params?: {
    page?: number;
    limit?: number;
    status?: string;
    type?: string;
    search?: string;
  }): Promise<PaginatedResponse<ServiceRequest>> => {
    try {
      const response = await apiClient.get(endpoints.serviceRequests.list, params);
      const respAny = response as any;
      const data = respAny && respAny.data ? respAny.data : respAny;
      const meta = respAny && respAny.meta ? respAny.meta : (data && data.meta ? data.meta : undefined);
      return {
        success: true,
        data: handleLaravelResponse<ServiceRequest[]>(response),
        pagination: meta || { page: 1, limit: 10, total: 0, totalPages: 1 }
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to get service requests',
        data: [],
        pagination: { page: 1, limit: 10, total: 0, totalPages: 1 }
      };
    }
  },

  getServiceRequest: async (id: string): Promise<ApiResponse<ServiceRequest>> => {
    try {
      const response = await apiClient.get(endpoints.serviceRequests.get(id));
      return {
        success: true,
        data: handleLaravelResponse<ServiceRequest>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to get service request'
      };
    }
  },

  createServiceRequest: async (data: CreateServiceRequestData): Promise<ApiResponse<ServiceRequest>> => {
    try {
      const response = await apiClient.post(endpoints.serviceRequests.create, data);
      return {
        success: true,
        data: handleLaravelResponse<ServiceRequest>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to create service request'
      };
    }
  },

  updateServiceRequest: async (id: string, data: Partial<CreateServiceRequestData>): Promise<ApiResponse<ServiceRequest>> => {
    try {
      const response = await apiClient.put(endpoints.serviceRequests.update(id), data);
      return {
        success: true,
        data: handleLaravelResponse<ServiceRequest>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to update service request'
      };
    }
  },

  deleteServiceRequest: async (id: string): Promise<ApiResponse> => {
    try {
      await apiClient.delete(endpoints.serviceRequests.delete(id));
      return { success: true };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to delete service request'
      };
    }
  },

  updateServiceRequestStatus: async (id: string, status: ServiceRequest['status']): Promise<ApiResponse<ServiceRequest>> => {
    try {
      const response = await apiClient.patch(endpoints.serviceRequests.status(id), { status });
      return {
        success: true,
        data: handleLaravelResponse<ServiceRequest>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to update service request status'
      };
    }
  },

  submitFeedback: async (id: string, feedback: string, rating: number): Promise<ApiResponse<ServiceRequest>> => {
    try {
      const response = await apiClient.post(`${endpoints.serviceRequests.get(id)}/feedback`, { feedback, rating });
      return {
        success: true,
        data: handleLaravelResponse<ServiceRequest>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to submit feedback'
      };
    }
  },
};

// Message Services
export const messageService = {
  getMessages: async (params?: {
    page?: number;
    limit?: number;
    isRead?: boolean;
    search?: string;
  }): Promise<PaginatedResponse<Message>> => {
    try {
      const response = await apiClient.get(endpoints.messages.list, params);
      const respAny = response as any;
      const data = respAny && respAny.data ? respAny.data : respAny;
      const meta = respAny && respAny.meta ? respAny.meta : (data && data.meta ? data.meta : undefined);
      return {
        success: true,
        data: handleLaravelResponse<Message[]>(response),
        pagination: meta || { page: 1, limit: 10, total: 0, totalPages: 1 }
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to get messages',
        data: [],
        pagination: { page: 1, limit: 10, total: 0, totalPages: 1 }
      };
    }
  },

  getMessage: async (id: string): Promise<ApiResponse<Message>> => {
    try {
      const response = await apiClient.get(endpoints.messages.get(id));
      return {
        success: true,
        data: handleLaravelResponse<Message>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to get message'
      };
    }
  },

  createMessage: async (data: CreateMessageData): Promise<ApiResponse<Message>> => {
    try {
      const response = await apiClient.post(endpoints.messages.create, data);
      return {
        success: true,
        data: handleLaravelResponse<Message>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to create message'
      };
    }
  },

  deleteMessage: async (id: string): Promise<ApiResponse> => {
    try {
      await apiClient.delete(endpoints.messages.delete(id));
      return { success: true };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to delete message'
      };
    }
  },

  markAsRead: async (id: string): Promise<ApiResponse<Message>> => {
    try {
      const response = await apiClient.patch(endpoints.messages.markRead(id));
      return {
        success: true,
        data: handleLaravelResponse<Message>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to mark message as read'
      };
    }
  },
};

// Blog Services
export const blogService = {
  getBlogPosts: async (params?: {
    page?: number;
    limit?: number;
    category?: string;
    featured?: boolean;
    published?: boolean;
    search?: string;
  }): Promise<PaginatedResponse<BlogPost>> => {
    try {
      const response = await apiClient.get(endpoints.blog.list, params);
      const respAny = response as any;
      const data = respAny && respAny.data ? respAny.data : respAny;
      const meta = respAny && respAny.meta ? respAny.meta : (data && data.meta ? data.meta : undefined);
      return {
        success: true,
        data: handleLaravelResponse<BlogPost[]>(response),
        pagination: meta || { page: 1, limit: 10, total: 0, totalPages: 1 }
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to get blog posts',
        data: [],
        pagination: { page: 1, limit: 10, total: 0, totalPages: 1 }
      };
    }
  },

  getBlogPost: async (id: string): Promise<ApiResponse<BlogPost>> => {
    try {
      const response = await apiClient.get(endpoints.blog.get(id));
      return {
        success: true,
        data: handleLaravelResponse<BlogPost>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to get blog post'
      };
    }
  },

  createBlogPost: async (data: CreateBlogPostData): Promise<ApiResponse<BlogPost>> => {
    try {
      let response;
      if (data.coverImage && data.coverImage instanceof File) {
        // Use FormData for file upload, use fetch directly
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('content', data.content);
        formData.append('excerpt', data.excerpt);
        formData.append('category', data.category);
        formData.append('tags', JSON.stringify(data.tags || []));
        formData.append('featured', String(data.featured));
        formData.append('published', String(data.published));
        formData.append('coverImage', data.coverImage);
        const token = localStorage.getItem('authToken');
        const res = await fetch(`${import('./config').then(m => m.config.api.baseURL)}${endpoints.blog.create}`, {
          method: 'POST',
          headers: {
            ...(token ? { Authorization: `Bearer ${token}` } : {})
          },
          body: formData,
        });
        if (!res.ok) throw new Error('Failed to create blog post');
        response = await res.json();
      } else {
        // Send as JSON
        response = await apiClient.post(endpoints.blog.create, data);
      }
      return {
        success: true,
        data: handleLaravelResponse<BlogPost>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to create blog post'
      };
    }
  },

  updateBlogPost: async (id: string, data: Partial<CreateBlogPostData>): Promise<ApiResponse<BlogPost>> => {
    try {
      const response = await apiClient.put(endpoints.blog.update(id), data);
      return {
        success: true,
        data: handleLaravelResponse<BlogPost>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to update blog post'
      };
    }
  },

  deleteBlogPost: async (id: string): Promise<ApiResponse> => {
    try {
      await apiClient.delete(endpoints.blog.delete(id));
      return { success: true };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to delete blog post'
      };
    }
  },

  likeBlogPost: async (id: string): Promise<ApiResponse<{ likes: number }>> => {
    try {
      const response = await apiClient.post(endpoints.blog.like(id));
      return {
        success: true,
        data: handleLaravelResponse<{ likes: number }>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to like blog post'
      };
    }
  },

  viewBlogPost: async (id: string): Promise<ApiResponse<{ views: number }>> => {
    try {
      const response = await apiClient.post(endpoints.blog.view(id));
      return {
        success: true,
        data: handleLaravelResponse<{ views: number }>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to view blog post'
      };
    }
  },
};

// Admin Services
export const adminService = {
  // User Management
  getUsers: async (params?: {
    page?: number;
    limit?: number;
    role?: string;
    status?: string;
    search?: string;
  }): Promise<PaginatedResponse<User>> => {
    try {
      const response = await apiClient.get(endpoints.admin.users, params);
      const respAny = response as any;
      const data = respAny && respAny.data ? respAny.data : respAny;
      const meta = respAny && respAny.meta ? respAny.meta : (data && data.meta ? data.meta : undefined);
      return {
        success: true,
        data: handleLaravelResponse<User[]>(response),
        pagination: meta || { page: 1, limit: 10, total: 0, totalPages: 1 }
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to get users',
        data: [],
        pagination: { page: 1, limit: 10, total: 0, totalPages: 1 }
      };
    }
  },

  getUser: async (id: string): Promise<ApiResponse<User>> => {
    try {
      const response = await apiClient.get(endpoints.admin.user(id));
      return {
        success: true,
        data: handleLaravelResponse<User>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to get user'
      };
    }
  },

  updateUser: async (id: string, data: Partial<User>): Promise<ApiResponse<User>> => {
    try {
      const response = await apiClient.put(endpoints.admin.user(id), data);
      return {
        success: true,
        data: handleLaravelResponse<User>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to update user'
      };
    }
  },

  deleteUser: async (id: string): Promise<ApiResponse> => {
    try {
      await apiClient.delete(endpoints.admin.user(id));
      return { success: true };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to delete user'
      };
    }
  },

  // Analytics
  getAnalytics: async (): Promise<ApiResponse<{
    totalUsers: number;
    totalProjects: number;
    totalServiceRequests: number;
    totalRevenue: number;
    recentActivity: any[];
    projectStats: any;
    userStats: any;
  }>> => {
    try {
      const response = await apiClient.get(endpoints.admin.analytics);
      return {
        success: true,
        data: handleLaravelResponse(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to get analytics'
      };
    }
  },

  // Team Management
  getTeam: async (): Promise<ApiResponse<User[]>> => {
    try {
      const response = await apiClient.get(endpoints.admin.team);
      return {
        success: true,
        data: handleLaravelResponse<User[]>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to get team'
      };
    }
  },

  addTeamMember: async (data: RegisterData): Promise<ApiResponse<User>> => {
    try {
      const response = await apiClient.post(endpoints.admin.team, data);
      return {
        success: true,
        data: handleLaravelResponse<User>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to add team member'
      };
    }
  },

  updateTeamMember: async (id: string, data: Partial<User>): Promise<ApiResponse<User>> => {
    try {
      const response = await apiClient.put(endpoints.admin.teamMember(id), data);
      return {
        success: true,
        data: handleLaravelResponse<User>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to update team member'
      };
    }
  },

  deleteTeamMember: async (id: string): Promise<ApiResponse> => {
    try {
      await apiClient.delete(endpoints.admin.teamMember(id));
      return { success: true };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to delete team member'
      };
    }
  },
};

// Contact Services
export const contactService = {
  submitContact: async (data: ContactForm): Promise<ApiResponse> => {
    try {
      await apiClient.post(endpoints.contact.submit, data);
      return { success: true };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to submit contact form'
      };
    }
  },
};

// File Upload Services
export const uploadService = {
  uploadImage: async (file: File, onProgress?: (progress: number) => void): Promise<ApiResponse<{ url: string }>> => {
    try {
      const response = await apiClient.upload(endpoints.upload.image, file, onProgress);
      return {
        success: true,
        data: handleLaravelResponse<{ url: string }>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to upload image'
      };
    }
  },

  uploadDocument: async (file: File, onProgress?: (progress: number) => void): Promise<ApiResponse<{ url: string }>> => {
    try {
      const response = await apiClient.upload(endpoints.upload.document, file, onProgress);
      return {
        success: true,
        data: handleLaravelResponse<{ url: string }>(response)
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to upload document'
      };
    }
  },
};
