import { Issue } from "~types/issues";

interface CurrentIssueProps {
	issue: Issue;
}

const CurrentIssue = ({ issue }: CurrentIssueProps) => {
	return (
		<div class="relative flex w-full">
			<div class="z-10 flex h-full w-full -translate-x-1 -translate-y-1 flex-col items-start gap-4 rounded-md border-2 border-black bg-rose-500 px-2 py-4">
				<span class="rounded-md border-2 border-black bg-rose-300 px-2 py-1">{issue.title}</span>
				<p class="text-sm">{issue.warning}</p>
			</div>
			<div class="absolute inset-0 rounded-md bg-black"></div>
		</div>
	);
};
export default CurrentIssue;
