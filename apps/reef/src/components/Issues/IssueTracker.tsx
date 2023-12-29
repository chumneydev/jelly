import IssueButton from "@components/Issues/IssueButton";
import IssueList from "@components/Issues/IssueList";

interface IssueTrackerProps {}

const IssueTracker = ({}: IssueTrackerProps) => {
	return (
		<div class="absolute bottom-10 right-10 flex flex-col">
			<IssueButton />
			{<IssueList />}
		</div>
	);
};
export default IssueTracker;
