import useIssuesStore from "@stores/issuesStore";

interface IssueListProps {}

const IssueList = ({}: IssueListProps) => {
	const { issues, showIssues } = useIssuesStore();
	return (
		<div>
			{issues.map((issue) => (
				<div>{issue.title}</div>
			))}
		</div>
	);
};
export default IssueList;
