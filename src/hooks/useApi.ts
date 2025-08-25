import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { auth, ApiError } from '@/lib/api';
import {
  authService,
  userService,
  projectService,
  serviceRequestService,
  messageService,
  blogService,
  adminService,
  contactService,
  uploadService,
  type User,
  type Project,
  type ServiceRequest,
  type Message,
  type BlogPost,
  type LoginCredentials,
  type RegisterData,
  type UpdateProfileData,
  type CreateProjectData,
  type CreateServiceRequestData,
  type CreateMessageData,
  type CreateBlogPostData,
  type ContactForm,
} from '@/lib/services';

// Query keys
export const queryKeys = {
  auth: {
    profile: ['auth', 'profile'],
  },
  users: {
    all: ['users'],
    profile: ['users', 'profile'],
    list: (params?: any) => ['users', 'list', params],
    detail: (id: string) => ['users', 'detail', id],
  },
  projects: {
    all: ['projects'],
    list: (params?: any) => ['projects', 'list', params],
    detail: (id: string) => ['projects', 'detail', id],
  },
  serviceRequests: {
    all: ['service-requests'],
    list: (params?: any) => ['service-requests', 'list', params],
    detail: (id: string) => ['service-requests', 'detail', id],
  },
  messages: {
    all: ['messages'],
    list: (params?: any) => ['messages', 'list', params],
    detail: (id: string) => ['messages', 'detail', id],
  },
  blog: {
    all: ['blog'],
    list: (params?: any) => ['blog', 'list', params],
    detail: (id: string) => ['blog', 'detail', id],
  },
  admin: {
    analytics: ['admin', 'analytics'],
    users: (params?: any) => ['admin', 'users', params],
    team: ['admin', 'team'],
  },
};

// Error handler
const handleError = (error: unknown, toast: any) => {
  if (error instanceof ApiError) {
    if (error.status === 401) {
      auth.removeToken();
      window.location.href = '/login';
    }
    toast({
      title: 'Error',
      description: error.message,
      variant: 'destructive',
    });
  } else {
    toast({
      title: 'Error',
      description: 'An unexpected error occurred',
      variant: 'destructive',
    });
  }
};

// Auth Hooks
export const useLogin = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      if (data.success && data.data) {
        auth.setToken(data.data.token);
        queryClient.setQueryData(queryKeys.auth.profile, data.data.user);
        toast({
          title: 'Success',
          description: 'Login successful',
        });
      }
    },
    onError: (error) => handleError(error, toast),
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: authService.register,
    onSuccess: (data) => {
      if (data.success && data.data) {
        auth.setToken(data.data.token);
        queryClient.setQueryData(queryKeys.auth.profile, data.data.user);
        toast({
          title: 'Success',
          description: 'Registration successful',
        });
      }
    },
    onError: (error) => handleError(error, toast),
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      auth.removeToken();
      queryClient.clear();
      toast({
        title: 'Success',
        description: 'Logout successful',
      });
    },
    onError: (error) => handleError(error, toast),
  });
};

export const useForgotPassword = () => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: authService.forgotPassword,
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Password reset email sent',
      });
    },
    onError: (error) => handleError(error, toast),
  });
};

export const useResetPassword = () => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({ token, password }: { token: string; password: string }) =>
      authService.resetPassword(token, password),
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Password reset successful',
      });
    },
    onError: (error) => handleError(error, toast),
  });
};

// User Hooks
export const useProfile = () => {
  const { toast } = useToast();

  return useQuery({
    queryKey: queryKeys.users.profile,
    queryFn: userService.getProfile,
    enabled: auth.isAuthenticated(),
    onError: (error) => handleError(error, toast),
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: userService.updateProfile,
    onSuccess: (data) => {
      if (data.success && data.data) {
        queryClient.setQueryData(queryKeys.users.profile, data.data);
        toast({
          title: 'Success',
          description: 'Profile updated successfully',
        });
      }
    },
    onError: (error) => handleError(error, toast),
  });
};

export const useChangePassword = () => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({ currentPassword, newPassword }: { currentPassword: string; newPassword: string }) =>
      userService.changePassword(currentPassword, newPassword),
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Password changed successfully',
      });
    },
    onError: (error) => handleError(error, toast),
  });
};

export const useUploadAvatar = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: userService.uploadAvatar,
    onSuccess: (data) => {
      if (data.success && data.data) {
        queryClient.invalidateQueries({ queryKey: queryKeys.users.profile });
        toast({
          title: 'Success',
          description: 'Avatar uploaded successfully',
        });
      }
    },
    onError: (error) => handleError(error, toast),
  });
};

// Project Hooks
export const useProjects = (params?: any) => {
  const { toast } = useToast();

  return useQuery({
    queryKey: queryKeys.projects.list(params),
    queryFn: () => projectService.getProjects(params),
    enabled: auth.isAuthenticated(),
    onError: (error) => handleError(error, toast),
  });
};

export const useProject = (id: string) => {
  const { toast } = useToast();

  return useQuery({
    queryKey: queryKeys.projects.detail(id),
    queryFn: () => projectService.getProject(id),
    enabled: !!id && auth.isAuthenticated(),
    onError: (error) => handleError(error, toast),
  });
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: projectService.createProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.projects.all });
      toast({
        title: 'Success',
        description: 'Project created successfully',
      });
    },
    onError: (error) => handleError(error, toast),
  });
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<CreateProjectData> }) =>
      projectService.updateProject(id, data),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.projects.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.projects.detail(variables.id) });
      toast({
        title: 'Success',
        description: 'Project updated successfully',
      });
    },
    onError: (error) => handleError(error, toast),
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: projectService.deleteProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.projects.all });
      toast({
        title: 'Success',
        description: 'Project deleted successfully',
      });
    },
    onError: (error) => handleError(error, toast),
  });
};

// Service Request Hooks
export const useServiceRequests = (params?: any) => {
  const { toast } = useToast();

  return useQuery({
    queryKey: queryKeys.serviceRequests.list(params),
    queryFn: () => serviceRequestService.getServiceRequests(params),
    enabled: auth.isAuthenticated(),
    onError: (error) => handleError(error, toast),
  });
};

export const useServiceRequest = (id: string) => {
  const { toast } = useToast();

  return useQuery({
    queryKey: queryKeys.serviceRequests.detail(id),
    queryFn: () => serviceRequestService.getServiceRequest(id),
    enabled: !!id && auth.isAuthenticated(),
    onError: (error) => handleError(error, toast),
  });
};

export const useCreateServiceRequest = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: serviceRequestService.createServiceRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.serviceRequests.all });
      toast({
        title: 'Success',
        description: 'Service request created successfully',
      });
    },
    onError: (error) => handleError(error, toast),
  });
};

export const useUpdateServiceRequest = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<CreateServiceRequestData> }) =>
      serviceRequestService.updateServiceRequest(id, data),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.serviceRequests.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.serviceRequests.detail(variables.id) });
      toast({
        title: 'Success',
        description: 'Service request updated successfully',
      });
    },
    onError: (error) => handleError(error, toast),
  });
};

export const useDeleteServiceRequest = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: serviceRequestService.deleteServiceRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.serviceRequests.all });
      toast({
        title: 'Success',
        description: 'Service request deleted successfully',
      });
    },
    onError: (error) => handleError(error, toast),
  });
};

export const useSubmitFeedback = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({ id, feedback, rating }: { id: string; feedback: string; rating: number }) =>
      serviceRequestService.submitFeedback(id, feedback, rating),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.serviceRequests.detail(variables.id) });
      toast({
        title: 'Success',
        description: 'Feedback submitted successfully',
      });
    },
    onError: (error) => handleError(error, toast),
  });
};

// Message Hooks
export const useMessages = (params?: any) => {
  const { toast } = useToast();

  return useQuery({
    queryKey: queryKeys.messages.list(params),
    queryFn: () => messageService.getMessages(params),
    enabled: auth.isAuthenticated(),
    onError: (error) => handleError(error, toast),
  });
};

export const useMessage = (id: string) => {
  const { toast } = useToast();

  return useQuery({
    queryKey: queryKeys.messages.detail(id),
    queryFn: () => messageService.getMessage(id),
    enabled: !!id && auth.isAuthenticated(),
    onError: (error) => handleError(error, toast),
  });
};

export const useCreateMessage = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: messageService.createMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.messages.all });
      toast({
        title: 'Success',
        description: 'Message sent successfully',
      });
    },
    onError: (error) => handleError(error, toast),
  });
};

export const useDeleteMessage = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: messageService.deleteMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.messages.all });
      toast({
        title: 'Success',
        description: 'Message deleted successfully',
      });
    },
    onError: (error) => handleError(error, toast),
  });
};

export const useMarkMessageAsRead = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: messageService.markAsRead,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.messages.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.messages.detail(variables) });
    },
    onError: (error) => handleError(error, toast),
  });
};

// Blog Hooks
export const useBlogPosts = (params?: any) => {
  const { toast } = useToast();

  return useQuery({
    queryKey: queryKeys.blog.list(params),
    queryFn: () => blogService.getBlogPosts(params),
    onError: (error) => handleError(error, toast),
  });
};

export const useBlogPost = (id: string) => {
  const { toast } = useToast();

  return useQuery({
    queryKey: queryKeys.blog.detail(id),
    queryFn: () => blogService.getBlogPost(id),
    enabled: !!id,
    onError: (error) => handleError(error, toast),
  });
};

export const useCreateBlogPost = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: blogService.createBlogPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.blog.all });
      toast({
        title: 'Success',
        description: 'Blog post created successfully',
      });
    },
    onError: (error) => handleError(error, toast),
  });
};

export const useUpdateBlogPost = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<CreateBlogPostData> }) =>
      blogService.updateBlogPost(id, data),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.blog.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.blog.detail(variables.id) });
      toast({
        title: 'Success',
        description: 'Blog post updated successfully',
      });
    },
    onError: (error) => handleError(error, toast),
  });
};

export const useDeleteBlogPost = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: blogService.deleteBlogPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.blog.all });
      toast({
        title: 'Success',
        description: 'Blog post deleted successfully',
      });
    },
    onError: (error) => handleError(error, toast),
  });
};

export const useLikeBlogPost = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: blogService.likeBlogPost,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.blog.detail(variables) });
      toast({
        title: 'Success',
        description: 'Blog post liked successfully',
      });
    },
    onError: (error) => handleError(error, toast),
  });
};

export const useViewBlogPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blogService.viewBlogPost,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.blog.detail(variables) });
    },
  });
};

// Admin Hooks
export const useAdminUsers = (params?: any) => {
  const { toast } = useToast();

  return useQuery({
    queryKey: queryKeys.admin.users(params),
    queryFn: () => adminService.getUsers(params),
    enabled: auth.isAuthenticated(),
    onError: (error) => handleError(error, toast),
  });
};

export const useAdminAnalytics = () => {
  const { toast } = useToast();

  return useQuery({
    queryKey: queryKeys.admin.analytics,
    queryFn: adminService.getAnalytics,
    enabled: auth.isAuthenticated(),
    onError: (error) => handleError(error, toast),
  });
};

export const useAdminTeam = () => {
  const { toast } = useToast();

  return useQuery({
    queryKey: queryKeys.admin.team,
    queryFn: adminService.getTeam,
    enabled: auth.isAuthenticated(),
    onError: (error) => handleError(error, toast),
  });
};

export const useAddTeamMember = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: adminService.addTeamMember,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.admin.team });
      toast({
        title: 'Success',
        description: 'Team member added successfully',
      });
    },
    onError: (error) => handleError(error, toast),
  });
};

export const useUpdateTeamMember = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<User> }) =>
      adminService.updateTeamMember(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.admin.team });
      toast({
        title: 'Success',
        description: 'Team member updated successfully',
      });
    },
    onError: (error) => handleError(error, toast),
  });
};

export const useDeleteTeamMember = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: adminService.deleteTeamMember,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.admin.team });
      toast({
        title: 'Success',
        description: 'Team member deleted successfully',
      });
    },
    onError: (error) => handleError(error, toast),
  });
};

// Contact Hooks
export const useSubmitContact = () => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: contactService.submitContact,
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Contact form submitted successfully',
      });
    },
    onError: (error) => handleError(error, toast),
  });
};

// Upload Hooks
export const useUploadImage = () => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: uploadService.uploadImage,
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Image uploaded successfully',
      });
    },
    onError: (error) => handleError(error, toast),
  });
};

export const useUploadDocument = () => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: uploadService.uploadDocument,
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Document uploaded successfully',
      });
    },
    onError: (error) => handleError(error, toast),
  });
};
