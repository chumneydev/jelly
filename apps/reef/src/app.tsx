import { useEffect } from "preact/hooks";
import "@styles/app.css";

import { Issue } from "~types/issues";
import issuesToCheckFor from "@defaults/issuesToCheckFor";

import IssueTracker from "@components/Issues/IssueTracker";
import useIssuesStore from "@stores/issuesStore";

export function App() {
	const { addIssues, clearIssues, setIsLoading } = useIssuesStore();

	// const issuesCount = issues.length;

	useEffect(() => {
		setIsLoading(true);
		const reefContainer = document.getElementById("jelly");
		clearIssues();
		const newIssues = issuesToCheckFor
			.map((issue) => {
				if (issue.check(reefContainer)) {
					return { title: issue.trackingScope, warning: issue.warning, solution: issue.solution };
				}
			})
			.filter((issue): issue is Issue => issue !== undefined);
		addIssues(newIssues);
		setIsLoading(false);
	}, []);

	return (
		<>
			<IssueTracker />
		</>
	);
}
