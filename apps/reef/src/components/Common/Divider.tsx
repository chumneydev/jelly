import { VariantProps, cva } from "cva";
import cn from "~utils/cn";

const dividerVariants = cva({
	base: "flex",
	variants: {
		height: {
			sm: "h-0.5",
			md: "h-1",
			lg: "h-2",
			full: "h-full",
		},
		width: {
			sm: "w-0.5",
			md: "w-1",
			lg: "w-2",
			full: "w-full",
		},
		color: {
			black: "bg-black",
			white: "bg-white",
			rose: "bg-rose-600",
			emerald: "bg-emerald-600",
		},
		orientation: {
			horizontal: "flex",
			vertical: "block",
		},
	},
	compoundVariants: [
		{
			orientation: "horizontal",
			width: "full",
			class: "w-full",
		},
		{
			orientation: "vertical",
			height: "full",
			className: "h-auto",
		},
	],
});

interface DividerProps {
	height: VariantProps<typeof dividerVariants>["height"];
	width: VariantProps<typeof dividerVariants>["width"];
	color: VariantProps<typeof dividerVariants>["color"];
	orientation: VariantProps<typeof dividerVariants>["orientation"];
}

const Divider = ({ height, width, color, orientation }: DividerProps) => {
	return <div class={cn(dividerVariants({ height, width, color, orientation }))}></div>;
};
export default Divider;
