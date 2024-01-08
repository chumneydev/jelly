import { cva } from "cva";

import cn from "~utils/clsxTwMerge";

import useWarningStore from "@stores/warningStore";
import useUIStore from "@stores/uiStore";
import WarningCount from "@components/Warnings/WarningButton/WarningCount";
import NoIssues from "@components/Warnings/WarningButton/NoIssues";

const warningInformationVariants = cva({
	base: "flex items-center justify-center gap-2 rounded-lg border-2 border-black px-4 py-2 text-sm font-semibold text-white transition-all duration-300 ease-in-out",
	variants: {
		intent: {
			"status-quo": "bg-green-500",
			warning: "bg-rose-500",
		},
		visibility: {
			hidden: "",
			visible: "-translate-y-14",
		},
	},
	defaultVariants: {
		intent: "status-quo",
		visibility: "hidden",
	},
});

interface WarningInformationProps {}

const WarningInformation = ({}: WarningInformationProps) => {
	const { foundWarnings, hasCheckedWarnings } = useWarningStore();
	const { isToolbarOpen } = useUIStore();

	const warningCount = foundWarnings.length;

	if (!hasCheckedWarnings) return null;

	return (
		<div className={cn(warningInformationVariants({ intent: warningCount > 0 ? "warning" : "status-quo", visibility: isToolbarOpen ? "hidden" : "visible" }))}>
			{warningCount > 0 ? <WarningCount /> : <NoIssues />}
		</div>
	);
};
export default WarningInformation;
