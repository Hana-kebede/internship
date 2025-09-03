// Configuration for the application
export const config = {
  // API Configuration
  api: {
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
    timeout: 10000,
  },
  
  // App Configuration
  app: {
    name: 'Hawi Software',
    version: '1.0.0',
    environment: import.meta.env.MODE,
  },
  
  // Development Configuration
  dev: {
    enableMockApi: false, // Always disable mock API for production
    enableDebug: import.meta.env.VITE_DEV_MODE === 'true',
  },
  
  // File Upload Configuration
  upload: {
    maxFileSize: parseInt(import.meta.env.VITE_MAX_FILE_SIZE || '5242880'),
    allowedTypes: import.meta.env.VITE_ALLOWED_FILE_TYPES?.split(',') || [
      'image/jpeg',
      'image/png', 
      'image/gif',
      'application/pdf'
    ],
  }
};

// Ensure API URL is set correctly for Laravel backend
if (!import.meta.env.VITE_API_URL) {
  console.warn('VITE_API_URL not set, using default: http://localhost:8000/api');
}

// Log configuration for debugging
console.log('API Configuration:', {
  baseURL: config.api.baseURL,
  mockApiEnabled: config.dev.enableMockApi,
  environment: config.app.environment
});
