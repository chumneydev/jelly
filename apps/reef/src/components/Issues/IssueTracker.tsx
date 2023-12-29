import issuesToCheckFor from "@defaults/issuesToCheckFor";
import useIssuesStore from "@stores/issuesStore";
import { useEffect } from "preact/hooks";
import { Issue } from "~types/issues";

interface IssueTrackerProps {}

const IssueTracker = ({}: IssueTrackerProps) => {
	const issues = useIssuesStore((state) => state.issues);
	const addIssues = useIssuesStore((state) => state.addIssues);
	const clearIssues = useIssuesStore((state) => state.clearIssues);

	const issuesCount = issues.length;

	useEffect(() => {
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
	}, []);

	return (
		<div>
			<div>{issuesCount}</div>
			<div>
				{issues.map((issue: Issue) => (
					<div>
						<div>{issue.title}</div>
						<div>{issue.warning}</div>
						<div>{issue.solution}</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default IssueTracker;
