import { clsx } from "clsx";
import { cva } from "cva";
import { BeakerIcon, ExclamationTriangleIcon } from "@heroicons/react/20/solid";

import useIssuesStore from "@stores/issuesStore";

const issueButtonVariant = cva({
	base: "z-10 flex h-full w-full items-center justify-center  gap-2 border-2 border-black  py-2 transition-all duration-200 ease-in-out hover:translate-x-0 hover:translate-y-0 text-white",
	variants: {
		issue: {
			true: "bg-rose-500",
			false: "bg-emerald-500",
		},
		show: {
			true: "translate-x-0 translate-y-0",
			false: "-translate-x-1 -translate-y-1",
		},
		loading: {
			true: "bg-gray-500",
			false: "",
		},
	},
});

interface IssueButtonProps {}

const IssueButton = ({}: IssueButtonProps) => {
	const { issues, showIssues, setShowIssues, isLoading } = useIssuesStore();

	const issuesCount = issues.length;

	const LoadingContent = () => (
		<>
			<BeakerIcon class="h-6 w-6" />
			Loading...
		</>
	);

	const NoIssuesContent = () => (
		<>
			<BeakerIcon class="h-6 w-6" /> No issues
		</>
	);

	const IssuesContent = () => (
		<>
			<ExclamationTriangleIcon class="h-6 w-6" />
			{issuesCount} Issue{issuesCount > 1 && "s"}
		</>
	);

	return (
		<button class="relative order-2 flex w-40 *:rounded-md" onClick={() => setShowIssues(!showIssues)}>
			<div class={clsx(issueButtonVariant({ issue: issuesCount > 0, show: showIssues, loading: isLoading }))}>
				{isLoading ? <LoadingContent /> : issuesCount > 0 ? <IssuesContent /> : <NoIssuesContent />}
			</div>
			<div class="absolute inset-0 bg-black"></div>
		</button>
	);
};
export default IssueButton;
