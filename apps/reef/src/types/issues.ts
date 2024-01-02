export type IssueKey = "container" | "page" | "componentType";

export interface Issue {
	title: string;
	warning: string;
	solution: string;
}
