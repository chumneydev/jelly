import { create } from "zustand";

interface UIStore {
	isToolbarOpen: boolean;
	toggleToolbar: () => void;
}

const useUIStore = create<UIStore>((set) => ({
	isToolbarOpen: true,
	toggleToolbar: () => set((state) => ({ isToolbarOpen: !state.isToolbarOpen })),
}));

export default useUIStore;
