import useIssuesStore from "@stores/issuesStore";
import { clsx } from "clsx";

interface IssueListProps {}

const IssueList = ({}: IssueListProps) => {
	const { issues, showIssues } = useIssuesStore();
	return (
		// <div className={clsx(showIssues ? "translate-y-0" : " translate-y-full", "transform transition-transform duration-500 ease-in-out")}>
		// 	{issues.map((issue) => (
		// 		<div>{issue.title}</div>
		// 	))}
		// </div>
		<div className={clsx(showIssues ? "max-h-[1000px] pl-1 pt-1 " : " max-h-0", "flex w-96 flex-col gap-4 overflow-hidden transition-max-h duration-500 ease-in-out")}>
			{showIssues &&
				issues.map((issue) => (
					<div class="relative flex w-full">
						<div class="z-10 flex h-full w-full -translate-x-1 -translate-y-1 flex-col items-start gap-4 rounded-md border-2 border-black bg-orange-500 px-2 py-4">
							<span class="rounded-md border-2 border-black bg-yellow-500 px-2 py-1">{issue.title}</span>
							<p class="text-sm">{issue.warning}</p>
						</div>
						<div class="absolute inset-0 rounded-md bg-black"></div>
					</div>
				))}
		</div>
	);
};
export default IssueList;
