import { create } from "zustand";
import { Issue } from "~types/issues";

interface IssueState {
	issues: Issue[];
	addIssues: (issues: Issue[]) => void;
	clearIssues: () => void;
}

const useIssuesStore = create<IssueState>((set) => ({
	issues: [],
	addIssues: (newIssues: Issue[]) => set((state) => ({ issues: [...state.issues, ...newIssues] })),
	clearIssues: () => set({ issues: [] }),
}));

export default useIssuesStore;
