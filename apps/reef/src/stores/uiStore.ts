import { create } from "zustand";

interface UIStore {
	isToolbarOpen: boolean;
	isDrawerOpen: boolean;
	toggleToolbar: () => void;
	toggleDrawer: () => void;
}

const useUIStore = create<UIStore>((set) => ({
	isToolbarOpen: true,
	isDrawerOpen: false,
	toggleToolbar: () => set((state) => ({ isToolbarOpen: !state.isToolbarOpen })),
	// toggleToolbar: () => set((state) => ({ isToolbarOpen: !state.isToolbarOpen, isDrawerOpen: state.isToolbarOpen ? false : state.isDrawerOpen })),

	toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
}));

export default useUIStore;
