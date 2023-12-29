import { create } from "zustand";
import { Issue } from "~types/issues";

interface IssueState {
	issues: Issue[];
	showIssues: boolean;
	addIssues: (issues: Issue[]) => void;
	clearIssues: () => void;
	setShowIssues: (showIssues: boolean) => void;
}

const useIssuesStore = create<IssueState>((set) => ({
	issues: [],
	showIssues: false,
	addIssues: (newIssues: Issue[]) => set((state) => ({ issues: [...state.issues, ...newIssues] })),
	clearIssues: () => set({ issues: [] }),
	setShowIssues: (showIssues: boolean) => set({ showIssues }),
}));

export default useIssuesStore;
