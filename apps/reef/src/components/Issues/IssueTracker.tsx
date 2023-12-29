import IssueButton from "@components/Issues/IssueButton";
import IssueList from "@components/Issues/IssueList";

interface IssueTrackerProps {}

const IssueTracker = ({}: IssueTrackerProps) => {
	return (
		<div class="absolute bottom-10 right-10 flex flex-col items-end gap-4">
			<IssueButton />
			{<IssueList />}
		</div>
	);
};
export default IssueTracker;
