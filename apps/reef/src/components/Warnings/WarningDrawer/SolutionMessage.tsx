import { Warning } from "~types/warning";

interface SolutionMessageProps {
	solution: Warning["solution"];
}

const SolutionMessage = ({ solution }: SolutionMessageProps) => {
	return (
		<div class="relative flex w-full *:rounded-md">
			<div class="z-10 flex h-full w-full -translate-x-1 -translate-y-1 items-center rounded-md border-2 border-black bg-emerald-300 px-4 text-sm">{solution}</div>
			<div class="absolute inset-0 bg-black"></div>
		</div>
	);
};
export default SolutionMessage;
