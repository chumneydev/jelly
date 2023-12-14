import { Category } from "~types/category";
import { Dictionary } from "~types/dictionary";

export const flexboxDirection: Dictionary = {
	category: Category.FlexboxGrid,
	name: "Direction",
	mapName: "direction",
	description: "The direction property specifies the direction of the flexible items.",
	properties: ["flex-direction"],
	dictionary: [
		{ name: "flex-row", value: "row" },
		{ name: "flex-row-reverse", value: "row-reverse" },
		{ name: "flex-col", value: "column" },
		{ name: "flex-col-reverse", value: "column-reverse" },
	],
};

export const flexboxWrap: Dictionary = {
	category: Category.FlexboxGrid,
	name: "Wrap",
	mapName: "wrap",
	description: "The wrap property specifies whether the flexible items should wrap or not.",
	properties: ["flex-wrap"],
	dictionary: [
		{ name: "flex-wrap", value: "wrap" },
		{ name: "flex-wrap-reverse", value: "wrap-reverse" },
		{ name: "flex-nowrap", value: "nowrap" },
	],
};

export const flexGrow: Dictionary = {
	category: Category.FlexboxGrid,
	name: "Grow",
	mapName: "grow",
	description: "The grow property specifies how much the item will grow relative to the rest of the flexible items inside the same container.",
	properties: ["flex-grow"],
	dictionary: [
		{ name: "flex-grow-0", value: "0" },
		{ name: "flex-grow", value: "1" },
		{ name: "flex-grow-2", value: "2" },
		{ name: "flex-grow-3", value: "3" },
		{ name: "flex-grow-4", value: "4" },
		{ name: "flex-grow-5", value: "5" },
		{ name: "flex-grow-6", value: "6" },
		{ name: "flex-grow-7", value: "7" },
		{ name: "flex-grow-8", value: "8" },
		{ name: "flex-grow-9", value: "9" },
	],
};
