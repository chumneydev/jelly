import CurrentIssue from "@components/Issues/CurrentIssue";
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
			{showIssues && issues.map((issue) => <CurrentIssue issue={issue} />)}
		</div>
	);
};
export default IssueList;
