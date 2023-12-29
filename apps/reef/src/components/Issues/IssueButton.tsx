import useIssuesStore from "@stores/issuesStore";

interface IssueButtonProps {}

const IssueButton = ({}: IssueButtonProps) => {
	const { issues, showIssues, setShowIssues } = useIssuesStore();

	const issuesCount = issues.length;

	return (
		<div class="order-2">
			<button onClick={() => setShowIssues(!showIssues)}>{issuesCount} Issues</button>
		</div>
	);
};
export default IssueButton;
