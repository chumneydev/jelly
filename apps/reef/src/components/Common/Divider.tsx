import { VariantProps, cva } from "cva";
import cn from "~utils/clsxTwMerge";

const dividerVariations = cva({
	base: "",
	variants: {
		orientation: {
			horizontal: "flex",
			vertical: "block",
		},
		flow: {
			absolute: "absolute",
			relative: "relative",
		},
		position: {
			top: "top-0",
			bottom: "bottom-0",
			left: "left-0",
			right: "right-0",
			default: "",
		},
	},
	compoundVariants: [
		{
			orientation: "horizontal",
			flow: "relative",
			position: "default",
			class: "h-1 w-full",
		},
		{
			orientation: "vertical",
			flow: "relative",
			position: "default",
			class: "w-1 h-auto",
		},
		{
			orientation: "horizontal",
			flow: "absolute",
			position: "top",
			class: "top-0 w-full h-1 bg-black",
		},
		{
			orientation: "horizontal",
			flow: "absolute",
			position: "bottom",
			class: "bottom-0",
		},
		{
			orientation: "vertical",
			flow: "absolute",
			position: "left",
			class: "left-0",
		},
		{
			orientation: "vertical",
			flow: "absolute",
			position: "right",
			class: "right-0",
		},
	],
});

interface DividerProps {
	className?: string;
	orientation: VariantProps<typeof dividerVariations>["orientation"];
	flow: VariantProps<typeof dividerVariations>["flow"];
	position: VariantProps<typeof dividerVariations>["position"];
}

const Divider = ({ orientation, flow, position, className }: DividerProps) => {
	return <div class={cn(dividerVariations({ orientation, flow, position }), className)}></div>;
};
export default Divider;
