import { create } from 'zustand';

interface AppState {
  user: null | { id: string, email: string, tier: string };
  setUser: (user: AppState['user']) => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const useStore = create<AppState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
