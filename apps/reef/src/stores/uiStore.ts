import { create } from "zustand";

interface UIStore {
	isToolbarOpen: boolean;
	toggleToolbar: () => void;
}

const useUIStore = create<UIStore>((set) => ({
	isToolbarOpen: false,
	toggleToolbar: () => set((state) => ({ isToolbarOpen: !state.isToolbarOpen })),
}));

export default useUIStore;
