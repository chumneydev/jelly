import { cva } from "cva";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";

import useUIStore from "@stores/uiStore";
import cn from "~utils/clsxTwMerge";
import useWarningStore from "@stores/warningStore";

interface VisibilityButtonProps {}

const visibilityButtonVariants = cva({
	base: "relative flex h-10 w-10 transition-all duration-300 ease-in-out *:rounded-full",
	variants: {
		intent: {
			show: "-translate-y-14",
			hide: "",
		},
	},
	defaultVariants: {
		intent: "hide",
	},
});

const VisibilityButton = ({}: VisibilityButtonProps) => {
	const { selectedWarning } = useWarningStore();
	const { isToolbarOpen, toggleToolbar, isDrawerOpen, toggleDrawer } = useUIStore();

	const handleToolbarToggle = () => {
		if (isToolbarOpen && isDrawerOpen) {
			toggleDrawer();
		} else if (!isToolbarOpen && selectedWarning) {
			toggleDrawer();
		}

		toggleToolbar();
	};

	return (
		<button className={cn(visibilityButtonVariants({ intent: isToolbarOpen ? "hide" : "show" }))} onClick={handleToolbarToggle}>
			<div className="z-10 flex h-full w-full -translate-x-0.5 -translate-y-0.5 items-center justify-center border-2 border-black bg-teal-400 transition-all duration-200 hover:translate-x-0 hover:translate-y-0 active:bg-yellow-400">
				{isToolbarOpen ? <EyeIcon className="h-5 w-5 text-black" /> : <EyeSlashIcon className="h-5 w-5 text-black" />}
			</div>
			<div className="absolute inset-0 bg-black"></div>
		</button>
	);
};
export default VisibilityButton;
