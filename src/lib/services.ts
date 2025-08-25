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

// Auth Services
export const authService = {
  login: async (credentials: LoginCredentials): Promise<ApiResponse<{ user: User; token: string }>> => {
    return apiClient.post(endpoints.auth.login, credentials);
  },

  register: async (data: RegisterData): Promise<ApiResponse<{ user: User; token: string }>> => {
    return apiClient.post(endpoints.auth.register, data);
  },

  logout: async (): Promise<ApiResponse> => {
    return apiClient.post(endpoints.auth.logout);
  },

  refreshToken: async (): Promise<ApiResponse<{ token: string }>> => {
    return apiClient.post(endpoints.auth.refresh);
  },

  forgotPassword: async (email: string): Promise<ApiResponse> => {
    return apiClient.post(endpoints.auth.forgotPassword, { email });
  },

  resetPassword: async (token: string, password: string): Promise<ApiResponse> => {
    return apiClient.post(endpoints.auth.resetPassword, { token, password });
  },

  verifyEmail: async (token: string): Promise<ApiResponse> => {
    return apiClient.post(endpoints.auth.verifyEmail, { token });
  },
};

// User Services
export const userService = {
  getProfile: async (): Promise<ApiResponse<User>> => {
    return apiClient.get(endpoints.users.profile);
  },

  updateProfile: async (data: UpdateProfileData): Promise<ApiResponse<User>> => {
    return apiClient.put(endpoints.users.updateProfile, data);
  },

  changePassword: async (currentPassword: string, newPassword: string): Promise<ApiResponse> => {
    return apiClient.post(endpoints.users.changePassword, { currentPassword, newPassword });
  },

  uploadAvatar: async (file: File): Promise<ApiResponse<{ profilePic: string }>> => {
    return apiClient.upload(endpoints.users.uploadAvatar, file);
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
    return apiClient.get(endpoints.projects.list, params);
  },

  getProject: async (id: string): Promise<ApiResponse<Project>> => {
    return apiClient.get(endpoints.projects.get(id));
  },

  createProject: async (data: CreateProjectData): Promise<ApiResponse<Project>> => {
    return apiClient.post(endpoints.projects.create, data);
  },

  updateProject: async (id: string, data: Partial<CreateProjectData>): Promise<ApiResponse<Project>> => {
    return apiClient.put(endpoints.projects.update(id), data);
  },

  deleteProject: async (id: string): Promise<ApiResponse> => {
    return apiClient.delete(endpoints.projects.delete(id));
  },

  updateProjectStatus: async (id: string, status: Project['status']): Promise<ApiResponse<Project>> => {
    return apiClient.patch(endpoints.projects.status(id), { status });
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
    return apiClient.get(endpoints.serviceRequests.list, params);
  },

  getServiceRequest: async (id: string): Promise<ApiResponse<ServiceRequest>> => {
    return apiClient.get(endpoints.serviceRequests.get(id));
  },

  createServiceRequest: async (data: CreateServiceRequestData): Promise<ApiResponse<ServiceRequest>> => {
    return apiClient.post(endpoints.serviceRequests.create, data);
  },

  updateServiceRequest: async (id: string, data: Partial<CreateServiceRequestData>): Promise<ApiResponse<ServiceRequest>> => {
    return apiClient.put(endpoints.serviceRequests.update(id), data);
  },

  deleteServiceRequest: async (id: string): Promise<ApiResponse> => {
    return apiClient.delete(endpoints.serviceRequests.delete(id));
  },

  updateServiceRequestStatus: async (id: string, status: ServiceRequest['status']): Promise<ApiResponse<ServiceRequest>> => {
    return apiClient.patch(endpoints.serviceRequests.status(id), { status });
  },

  submitFeedback: async (id: string, feedback: string, rating: number): Promise<ApiResponse<ServiceRequest>> => {
    return apiClient.post(`${endpoints.serviceRequests.get(id)}/feedback`, { feedback, rating });
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
    return apiClient.get(endpoints.messages.list, params);
  },

  getMessage: async (id: string): Promise<ApiResponse<Message>> => {
    return apiClient.get(endpoints.messages.get(id));
  },

  createMessage: async (data: CreateMessageData): Promise<ApiResponse<Message>> => {
    return apiClient.post(endpoints.messages.create, data);
  },

  deleteMessage: async (id: string): Promise<ApiResponse> => {
    return apiClient.delete(endpoints.messages.delete(id));
  },

  markAsRead: async (id: string): Promise<ApiResponse<Message>> => {
    return apiClient.patch(endpoints.messages.markRead(id));
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
    return apiClient.get(endpoints.blog.list, params);
  },

  getBlogPost: async (id: string): Promise<ApiResponse<BlogPost>> => {
    return apiClient.get(endpoints.blog.get(id));
  },

  createBlogPost: async (data: CreateBlogPostData): Promise<ApiResponse<BlogPost>> => {
    return apiClient.post(endpoints.blog.create, data);
  },

  updateBlogPost: async (id: string, data: Partial<CreateBlogPostData>): Promise<ApiResponse<BlogPost>> => {
    return apiClient.put(endpoints.blog.update(id), data);
  },

  deleteBlogPost: async (id: string): Promise<ApiResponse> => {
    return apiClient.delete(endpoints.blog.delete(id));
  },

  likeBlogPost: async (id: string): Promise<ApiResponse<{ likes: number }>> => {
    return apiClient.post(endpoints.blog.like(id));
  },

  viewBlogPost: async (id: string): Promise<ApiResponse<{ views: number }>> => {
    return apiClient.post(endpoints.blog.view(id));
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
    return apiClient.get(endpoints.admin.users, params);
  },

  getUser: async (id: string): Promise<ApiResponse<User>> => {
    return apiClient.get(endpoints.admin.user(id));
  },

  updateUser: async (id: string, data: Partial<User>): Promise<ApiResponse<User>> => {
    return apiClient.put(endpoints.admin.user(id), data);
  },

  deleteUser: async (id: string): Promise<ApiResponse> => {
    return apiClient.delete(endpoints.admin.user(id));
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
    return apiClient.get(endpoints.admin.analytics);
  },

  // Team Management
  getTeam: async (): Promise<ApiResponse<User[]>> => {
    return apiClient.get(endpoints.admin.team);
  },

  addTeamMember: async (data: RegisterData): Promise<ApiResponse<User>> => {
    return apiClient.post(endpoints.admin.team, data);
  },

  updateTeamMember: async (id: string, data: Partial<User>): Promise<ApiResponse<User>> => {
    return apiClient.put(endpoints.admin.teamMember(id), data);
  },

  deleteTeamMember: async (id: string): Promise<ApiResponse> => {
    return apiClient.delete(endpoints.admin.teamMember(id));
  },
};

// Contact Services
export const contactService = {
  submitContact: async (data: ContactForm): Promise<ApiResponse> => {
    return apiClient.post(endpoints.contact.submit, data);
  },
};

// File Upload Services
export const uploadService = {
  uploadImage: async (file: File, onProgress?: (progress: number) => void): Promise<ApiResponse<{ url: string }>> => {
    return apiClient.upload(endpoints.upload.image, file, onProgress);
  },

  uploadDocument: async (file: File, onProgress?: (progress: number) => void): Promise<ApiResponse<{ url: string }>> => {
    return apiClient.upload(endpoints.upload.document, file, onProgress);
  },
};
