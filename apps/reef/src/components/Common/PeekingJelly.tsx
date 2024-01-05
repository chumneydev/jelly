import jellyIcon from "@assets/jelly.svg";
import useUIStore from "@stores/uiStore";
import { cva } from "cva";
import cn from "~utils/clsxTwMerge";

const peekJellyVariants = cva({
	base: "fixed inset-x-0 bottom-0 z-10 mx-auto h-32 w-32 transition-all duration-300 ease-in-out",
	variants: {
		peek: {
			hidden: "translate-y-32",
			visible: "translate-y-18",
		},
	},
	defaultVariants: {
		peek: "hidden",
	},
});

interface PeekingJellyProps {}

const PeekingJelly = ({}: PeekingJellyProps) => {
	const { isToolbarOpen } = useUIStore();

	return <img src={jellyIcon} className={cn(peekJellyVariants({ peek: isToolbarOpen ? "hidden" : "visible" }))} />;
};
export default PeekingJelly;
