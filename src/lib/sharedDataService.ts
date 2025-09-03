import { create } from 'zustand';

// Shared data store for admin and user dashboards
interface SharedDataState {
  // User data that both dashboards can access
  currentUser: any | null;
  userProjects: any[];
  userServiceRequests: any[];
  userMessages: any[];
  
  // Admin-specific data that affects user dashboard
  adminNotifications: any[];
  systemUpdates: any[];
  
  // Actions
  setCurrentUser: (user: any) => void;
  updateUserProjects: (projects: any[]) => void;
  updateUserServiceRequests: (requests: any[]) => void;
  updateUserMessages: (messages: any[]) => void;
  addAdminNotification: (notification: any) => void;
  addSystemUpdate: (update: any) => void;
  clearAdminNotifications: () => void;
  clearSystemUpdates: () => void;
}

export const useSharedDataStore = create<SharedDataState>((set) => ({
  // Initial state
  currentUser: null,
  userProjects: [],
  userServiceRequests: [],
  userMessages: [],
  adminNotifications: [],
  systemUpdates: [],
  
  // Actions
  setCurrentUser: (user) => set({ currentUser: user }),
  updateUserProjects: (projects) => set({ userProjects: projects }),
  updateUserServiceRequests: (requests) => set({ userServiceRequests: requests }),
  updateUserMessages: (messages) => set({ userMessages: messages }),
  addAdminNotification: (notification) => set((state) => ({
    adminNotifications: [...state.adminNotifications, { ...notification, id: Date.now(), timestamp: new Date().toISOString() }]
  })),
  addSystemUpdate: (update) => set((state) => ({
    systemUpdates: [...state.systemUpdates, { ...update, id: Date.now(), timestamp: new Date().toISOString() }]
  })),
  clearAdminNotifications: () => set({ adminNotifications: [] }),
  clearSystemUpdates: () => set({ systemUpdates: [] }),
}));

// Real-time communication between dashboards
export class DashboardCommunicationService {
  private static instance: DashboardCommunicationService;
  private listeners: Map<string, Function[]> = new Map();

  static getInstance(): DashboardCommunicationService {
    if (!DashboardCommunicationService.instance) {
      DashboardCommunicationService.instance = new DashboardCommunicationService();
    }
    return DashboardCommunicationService.instance;
  }

  // Subscribe to events
  subscribe(event: string, callback: Function): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(callback);

    // Return unsubscribe function
    return () => {
      const callbacks = this.listeners.get(event);
      if (callbacks) {
        const index = callbacks.indexOf(callback);
        if (index > -1) {
          callbacks.splice(index, 1);
        }
      }
    };
  }

  // Emit events
  emit(event: string, data?: any): void {
    const callbacks = this.listeners.get(event);
    if (callbacks) {
      callbacks.forEach(callback => callback(data));
    }
  }

  // Admin dashboard events
  notifyUserUpdate(userId: string, updateType: string, data: any): void {
    this.emit('user-updated', { userId, updateType, data });
  }

  notifyProjectUpdate(projectId: string, updateType: string, data: any): void {
    this.emit('project-updated', { projectId, updateType, data });
  }

  notifyServiceRequestUpdate(requestId: string, updateType: string, data: any): void {
    this.emit('service-request-updated', { requestId, updateType, data });
  }

  notifySystemUpdate(updateType: string, data: any): void {
    this.emit('system-updated', { updateType, data });
  }

  // User dashboard events
  notifyAdminOfUserAction(userId: string, actionType: string, data: any): void {
    this.emit('user-action', { userId, actionType, data });
  }

  notifyAdminOfProjectAction(projectId: string, actionType: string, data: any): void {
    this.emit('project-action', { projectId, actionType, data });
  }

  notifyAdminOfServiceRequestAction(requestId: string, actionType: string, data: any): void {
    this.emit('service-request-action', { requestId, actionType, data });
  }
}

// Export singleton instance
export const dashboardCommunication = DashboardCommunicationService.getInstance();


