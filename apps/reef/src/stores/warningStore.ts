import { create } from "zustand";
import { Warning } from "~types/warning";
import defaultWarnings from "~warnings/defaultWarnings";

interface WarningStore {
	defaultWarnings: Warning[];
	foundWarnings: Warning[];
	hasCheckedWarnings: boolean;
	isListOpen: boolean;
	addWarning: (warning: Warning) => void;
	checkWarnings: () => void;
	toggleList: () => void;
}

const useWarningStore = create<WarningStore>((set) => ({
	defaultWarnings,
	foundWarnings: [],
	hasCheckedWarnings: false,
	isListOpen: false,
	addWarning: (warning) => set((state) => ({ defaultWarnings: [...state.defaultWarnings, warning] })),
	checkWarnings: () =>
		set((state) => {
			const foundWarnings = state.defaultWarnings.filter((warning) => warning.check());
			return { foundWarnings, hasCheckedWarnings: true };
		}),
	toggleList: () => set((state) => ({ isListOpen: !state.isListOpen })),
}));

export default useWarningStore;
