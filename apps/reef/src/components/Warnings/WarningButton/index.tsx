import { clsx } from "clsx";
import { cva } from "cva";

import useWarningStore from "@stores/warningStore";
import WarningCount from "@components/Warnings/WarningButton/WarningCount";
import { NoIssues } from "@components/Warnings/WarningButton/NoIssues";

const warningButtonVariants = cva({
	base: "z-10 flex h-full w-52 items-center justify-center font-semibold   gap-2 border-2 border-black  py-2 px-4 transition-all duration-200 ease-in-out hover:translate-x-0 hover:translate-y-0 text-white",
	variants: {
		warnings: {
			true: "bg-rose-500",
			false: "bg-emerald-500",
		},
		listOpen: {
			true: "translate-x-0 translate-y-0",
			false: "-translate-x-1 -translate-y-1",
		},
	},
});

interface WarningButtonProps {}

const WarningButton = ({}: WarningButtonProps) => {
	const { foundWarnings, isListOpen, toggleList, hasCheckedWarnings } = useWarningStore();

	const warningCount = foundWarnings.length;

	const handleClick = () => {
		toggleList();
	};

	if (!hasCheckedWarnings) return null;

	return (
		<button class="relative flex *:rounded-md" onClick={handleClick}>
			<div class={clsx(warningButtonVariants({ warnings: warningCount > 0, listOpen: isListOpen }))}>{warningCount > 0 ? <WarningCount /> : <NoIssues />}</div>
			<div class="absolute inset-0 bg-black"></div>
		</button>
	);
};
export default WarningButton;
