import { create } from "zustand";
import { Issue } from "~types/issues";

interface IssueState {
	issues: Issue[];
	showIssues: boolean;
	isLoading: boolean;
	addIssues: (issues: Issue[]) => void;
	clearIssues: () => void;
	setShowIssues: (showIssues: boolean) => void;
	setIsLoading: (isLoading: boolean) => void;
}

const useIssuesStore = create<IssueState>((set) => ({
	issues: [],
	showIssues: false,
	isLoading: true,
	addIssues: (newIssues: Issue[]) => set((state) => ({ issues: [...state.issues, ...newIssues] })),
	clearIssues: () => set({ issues: [] }),
	setShowIssues: (showIssues: boolean) => set({ showIssues }),
	setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));

export default useIssuesStore;
