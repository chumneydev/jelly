import { Category } from "~types/category";
import { Dictionary } from "~types/dictionary";

export const justifyContent: Dictionary = {
	name: "Justify Content",
	category: Category.FlexboxGrid,
	mapName: "justifyContent",
	description: "The justify-content property aligns the flexible container's items when the items do not use all available space on the main-axis (horizontally).",
	properties: ["justify-content"],
	dictionary: [
		{ name: "justify-start", value: "flex-start" },
		{ name: "justify-end", value: "flex-end" },
		{ name: "justify-center", value: "center" },
		{ name: "justify-between", value: "space-between" },
		{ name: "justify-around", value: "space-around" },
		{ name: "justify-evenly", value: "space-evenly" },
	],
};

export const justifyItems: Dictionary = {
	name: "Justify Items",
	category: Category.FlexboxGrid,
	mapName: "justifyItems",
	description: "The justify-items property aligns the items inside a flexible container along the inline (row) axis (as opposed to the align-items property which aligns them along the cross axis).",
	properties: ["justify-items"],
	dictionary: [
		{ name: "justify-items-auto", value: "auto" },
		{ name: "justify-items-start", value: "start" },
		{ name: "justify-items-end", value: "end" },
		{ name: "justify-items-center", value: "center" },
		{ name: "justify-items-stretch", value: "stretch" },
	],
};

export const justifySelf: Dictionary = {
	name: "Justify Self",
	category: Category.FlexboxGrid,
	mapName: "justifySelf",
	description: "The justify-self property aligns an item inside its flexible container along the inline (row) axis (as opposed to the align-self property which aligns along the cross axis).",
	properties: ["justify-self"],
	dictionary: [
		{ name: "justify-self-auto", value: "auto" },
		{ name: "justify-self-start", value: "start" },
		{ name: "justify-self-end", value: "end" },
		{ name: "justify-self-center", value: "center" },
		{ name: "justify-self-stretch", value: "stretch" },
	],
};

export const alignContent: Dictionary = {
	name: "Align Content",
	category: Category.FlexboxGrid,
	mapName: "alignContent",
	description: "The align-content property aligns a flexible container's items when there is extra space in the cross-axis (between the lines).",
	properties: ["align-content"],
	dictionary: [
		{ name: "content-start", value: "flex-start" },
		{ name: "content-end", value: "flex-end" },
		{ name: "content-center", value: "center" },
		{ name: "content-between", value: "space-between" },
		{ name: "content-around", value: "space-around" },
		{ name: "content-evenly", value: "space-evenly" },
		{ name: "content-stretch", value: "stretch" },
	],
};

export const alignItems: Dictionary = {
	name: "Align Items",
	category: Category.FlexboxGrid,
	mapName: "alignItems",
	description: "The align-items property aligns the items inside a flexible container along the cross axis (as opposed to the justify-items property which aligns them along the main axis).",
	properties: ["align-items"],
	dictionary: [
		{ name: "items-start", value: "flex-start" },
		{ name: "items-end", value: "flex-end" },
		{ name: "items-center", value: "center" },
		{ name: "items-baseline", value: "baseline" },
		{ name: "items-stretch", value: "stretch" },
	],
};
