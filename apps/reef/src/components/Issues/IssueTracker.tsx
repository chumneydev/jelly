import IssueButton from "@components/Issues/IssueButton";
import IssueList from "@components/Issues/IssueList";
import useIssuesStore from "@stores/issuesStore";

interface IssueTrackerProps {}

const IssueTracker = ({}: IssueTrackerProps) => {
	const { showIssues } = useIssuesStore();
	return (
		<div class="absolute bottom-10 right-10 flex flex-col">
			<IssueButton />
			{showIssues && <IssueList />}
		</div>
	);
};
export default IssueTracker;
