import { cva } from "cva";

import { Warning } from "~types/warning";

import cn from "~utils/clsxTwMerge";
import renderCurrentWarningMessage from "~utils/renderCurrentWarningMessage";

import useUIStore from "@stores/uiStore";
import useWarningStore from "@stores/warningStore";

import CloseButton from "@components/Warnings/WarningDrawer/CloseButton";
import SolutionMessage from "@components/Warnings/WarningDrawer/SolutionMessage";
import WarningMessage from "@components/Warnings/WarningDrawer/WarningMessage";

const warningDrawerVariants = cva({
	base: "fixed inset-x-0 bottom-0 z-10 mx-auto grid h-48 max-w-2xl grid-cols-2 gap-8 rounded-t-md border-4 border-black bg-rose-500 px-4 py-6 transition-all duration-300 ease-in-out ",
	variants: {
		toolbar: {
			hidden: "-translate-y-12",
			visible: "translate-y-48",
		},
		drawer: {
			hidden: "-translate-y-12",
			visible: "translate-y-48",
		},
	},
	defaultVariants: {
		toolbar: "hidden",
		drawer: "hidden",
	},
});

interface WarningDrawerProps {
	currentWarning: Warning | null;
}

const WarningDrawer = ({ currentWarning }: WarningDrawerProps) => {
	const message = currentWarning ? renderCurrentWarningMessage(currentWarning) : "";

	const {} = useWarningStore();
	const { isToolbarOpen, isDrawerOpen } = useUIStore();

	return (
		<div className={cn(warningDrawerVariants({ toolbar: isToolbarOpen ? "hidden" : "visible", drawer: isDrawerOpen ? "hidden" : "visible" }))}>
			<CloseButton />
			<WarningMessage message={message} />
			<SolutionMessage solution={currentWarning?.solution ?? ""} />
		</div>
	);
};
export default WarningDrawer;
