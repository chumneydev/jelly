import useUIStore from "@stores/uiStore";
import { cva } from "cva";
import { FunctionComponent } from "preact";
import cn from "~utils/clsxTwMerge";

const toolbarVariants = cva({
	base: "fixed bottom-0 grid h-14 w-full grid-cols-toolbar-sm items-center bg-violet-500 px-4 transition-all duration-300 ease-in-out z-20",
	variants: {
		visibility: {
			hidden: "translate-y-14",
			visible: "translate-y-0",
		},
	},
	defaultVariants: {
		visibility: "visible",
	},
});

interface ToolbarProps {}

const Toolbar: FunctionComponent<ToolbarProps> = ({ children }) => {
	const { isToolbarOpen } = useUIStore();

	return <div className={cn(toolbarVariants({ visibility: isToolbarOpen ? "visible" : "hidden" }))}>{children}</div>;
};
export default Toolbar;
