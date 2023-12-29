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
		<div className={clsx(showIssues ? "max-h-[1000px]" : " max-h-0", "transition-max-h overflow-hidden bg-rose-500 duration-1000 ease-in-out")}>
			{showIssues && issues.map((issue) => <div>{issue.title}</div>)}
		</div>
	);
};
export default IssueList;
