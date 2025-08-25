// Configuration for API and development settings
export const config = {
  // Set to false to use mock functionality instead of real API calls
  useRealApi: false,
  
  // API base URL (only used when useRealApi is true)
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  
  // Development mode
  isDev: import.meta.env.DEV,
  
  // Mock delay for simulated API calls (in milliseconds)
  mockDelay: 1000,
  
  // Feature flags
  features: {
    enableAnalytics: false,
    enableErrorTracking: false,
    enableFileUpload: false,
  }
};
