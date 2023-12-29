import { create } from "zustand";
import { Issue } from "~types/issues";

interface IssueState {
	issues: Issue[];
	addIssue: (issue: Issue) => void;
	clearIssues: () => void;
}

const useIssuesStore = create<IssueState>((set) => ({
	issues: [],
	addIssue: (issue) =>
		set((state) => ({
			issues: [...state.issues, issue],
		})),
	clearIssues: () => set({ issues: [] }),
}));

export default useIssuesStore;
