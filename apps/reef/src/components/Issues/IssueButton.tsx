import { clsx } from "clsx";
import { cva } from "cva";
import { BeakerIcon, ExclamationTriangleIcon } from "@heroicons/react/20/solid";

import useIssuesStore from "@stores/issuesStore";

const issueButtonVariant = cva({
	base: "z-10 flex h-full w-full items-center justify-center  gap-2 border-2 border-black  py-2 transition-all duration-200 ease-in-out hover:translate-x-0 hover:translate-y-0",
	variants: {
		issue: {
			true: "bg-orange-500",
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

	const currentButtonContent = () => {
		if (isLoading) {
			return "Loading...";
		}
		return issuesCount > 0 ? (
			<>
				<ExclamationTriangleIcon class="h-6 w-6" />
				{issuesCount} Issues
			</>
		) : (
			<>
				<BeakerIcon class="h-6 w-6" /> No issues
			</>
		);
	};

	return (
		<button class="relative order-2 flex w-40 *:rounded-md" onClick={() => setShowIssues(!showIssues)}>
			<div class={clsx(issueButtonVariant({ issue: issuesCount > 0, show: showIssues, loading: isLoading }))}>{currentButtonContent()}</div>
			<div class="absolute inset-0 bg-black"></div>
		</button>
	);
};
export default IssueButton;
