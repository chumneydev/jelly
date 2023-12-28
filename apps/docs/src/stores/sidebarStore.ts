import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface SidebarState {
  selectedType: "utilities" | "components";
  openCategory: string | null;
  setSelectedType: (type: "utilities" | "components") => void;
  setOpenCategory: (category: string | null) => void;
  handleTypeChange: (type: "utilities" | "components") => void;
  handleOpenCategory: (category: string) => void;
}

export const useSidebarStore = create<SidebarState>(
  persist(
    (set, get) => ({
      selectedType: "utilities",
      openCategory: "Getting Started",
      setSelectedType: (type: "utilities" | "components") => set({ selectedType: type }),
      setOpenCategory: (category: string | null) => set({ openCategory: category }),
      handleTypeChange: (type: "utilities" | "components") => set({ selectedType: type }),
      handleOpenCategory: (category: string) => {
        const { openCategory } = get() as SidebarState;
        set({ openCategory: openCategory === category ? null : category });
      },
    }),
    {
      name: "sidebar-navigation", // unique name
      storage: createJSONStorage(() => sessionStorage), // (optional) by default the 'localStorage' is used
    },
  ) as any,
);

export default useSidebarStore;
