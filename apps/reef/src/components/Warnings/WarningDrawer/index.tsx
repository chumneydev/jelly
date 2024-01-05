import SolutionMessage from "@components/Warnings/WarningDrawer/SolutionMessage";
import WarningMessage from "@components/Warnings/WarningDrawer/WarningMessage";
import { cva } from "cva";

import { Warning } from "~types/warning";
import cn from "~utils/clsxTwMerge";

import renderCurrentWarningMessage from "~utils/renderCurrentWarningMessage";

const warningDrawerVariants = cva({
	base: "fixed grid grid-cols-2 gap-8 inset-x-0 bottom-0 z-10 mx-auto max-w-2xl rounded-t-md border-4 py-6 px-4 border-black bg-rose-500 transition-all duration-300 ease-in-out h-48 -translate-y-12",
	variants: {},
	defaultVariants: {},
});

interface WarningDrawerProps {
	currentWarning: Warning | null;
}

const WarningDrawer = ({ currentWarning }: WarningDrawerProps) => {
	const message = currentWarning ? renderCurrentWarningMessage(currentWarning) : "";

	return (
		<div className={cn(warningDrawerVariants({}))}>
			<WarningMessage message={message} />
			<SolutionMessage solution={currentWarning?.solution ?? ""} />
		</div>
	);
};
export default WarningDrawer;
