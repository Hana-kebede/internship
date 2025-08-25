// API Configuration and utilities
const USE_REAL_API = false; // Set to false to use mock functionality
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Error handling
export class ApiError extends Error {
  constructor(
    public status: number,
    public message: string,
    public data?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Base API client
class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    // If not using real API, throw an error to prevent actual network calls
    if (!USE_REAL_API) {
      throw new ApiError(0, 'API calls disabled - using mock functionality');
    }
    
    const url = `${this.baseURL}${endpoint}`;
    
    // Get auth token from localStorage
    const token = localStorage.getItem('authToken');
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new ApiError(
          response.status,
          errorData.message || `HTTP error! status: ${response.status}`,
          errorData
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(0, 'Network error', error);
    }
  }

  // GET request
  async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
    return this.request<T>(`${endpoint}${queryString}`);
  }

  // POST request
  async post<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // PUT request
  async put<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // PATCH request
  async patch<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // DELETE request
  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'DELETE',
    });
  }

  // File upload
  async upload<T>(endpoint: string, file: File, onProgress?: (progress: number) => void): Promise<T> {
    const formData = new FormData();
    formData.append('file', file);

    const token = localStorage.getItem('authToken');
    
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      
      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable && onProgress) {
          const progress = (event.loaded / event.total) * 100;
          onProgress(progress);
        }
      });

      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const data = JSON.parse(xhr.responseText);
            resolve(data);
          } catch (error) {
            reject(new ApiError(xhr.status, 'Invalid JSON response'));
          }
        } else {
          reject(new ApiError(xhr.status, xhr.statusText));
        }
      });

      xhr.addEventListener('error', () => {
        reject(new ApiError(0, 'Network error'));
      });

      xhr.open('POST', `${this.baseURL}${endpoint}`);
      if (token) {
        xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      }
      xhr.send(formData);
    });
  }
}

// Create API client instance
export const apiClient = new ApiClient(API_BASE_URL);

// Auth utilities
export const auth = {
  setToken: (token: string) => {
    localStorage.setItem('authToken', token);
  },
  
  getToken: () => {
    return localStorage.getItem('authToken');
  },
  
  removeToken: () => {
    localStorage.removeItem('authToken');
  },
  
  isAuthenticated: () => {
    return !!localStorage.getItem('authToken');
  }
};

// API endpoints
export const endpoints = {
  // Auth
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
    verifyEmail: '/auth/verify-email',
  },
  
  // Users
  users: {
    profile: '/users/profile',
    updateProfile: '/users/profile',
    changePassword: '/users/change-password',
    uploadAvatar: '/users/avatar',
  },
  
  // Projects
  projects: {
    list: '/projects',
    create: '/projects',
    get: (id: string) => `/projects/${id}`,
    update: (id: string) => `/projects/${id}`,
    delete: (id: string) => `/projects/${id}`,
    status: (id: string) => `/projects/${id}/status`,
  },
  
  // Service Requests
  serviceRequests: {
    list: '/service-requests',
    create: '/service-requests',
    get: (id: string) => `/service-requests/${id}`,
    update: (id: string) => `/service-requests/${id}`,
    delete: (id: string) => `/service-requests/${id}`,
    status: (id: string) => `/service-requests/${id}/status`,
  },
  
  // Messages
  messages: {
    list: '/messages',
    create: '/messages',
    get: (id: string) => `/messages/${id}`,
    delete: (id: string) => `/messages/${id}`,
    markRead: (id: string) => `/messages/${id}/read`,
  },
  
  // Blog
  blog: {
    list: '/blog',
    create: '/blog',
    get: (id: string) => `/blog/${id}`,
    update: (id: string) => `/blog/${id}`,
    delete: (id: string) => `/blog/${id}`,
    like: (id: string) => `/blog/${id}/like`,
    view: (id: string) => `/blog/${id}/view`,
  },
  
  // Admin
  admin: {
    users: '/admin/users',
    user: (id: string) => `/admin/users/${id}`,
    projects: '/admin/projects',
    project: (id: string) => `/admin/projects/${id}`,
    serviceRequests: '/admin/service-requests',
    serviceRequest: (id: string) => `/admin/service-requests/${id}`,
    messages: '/admin/messages',
    message: (id: string) => `/admin/messages/${id}`,
    blog: '/admin/blog',
    blogPost: (id: string) => `/admin/blog/${id}`,
    analytics: '/admin/analytics',
    team: '/admin/team',
    teamMember: (id: string) => `/admin/team/${id}`,
  },
  
  // Contact
  contact: {
    submit: '/contact',
  },
  
  // File upload
  upload: {
    image: '/upload/image',
    document: '/upload/document',
  }
};
