import { Category } from "~types/category";
import { Dictionary } from "~types/dictionary";

export const borderWidth: Dictionary = {
	category: Category.Borders,
	name: "Border",
	mapName: "borderWidth",
	description: "The border property sets an element's border.",
	properties: ["border-width"],
	dictionary: [
		{ name: "border", value: "1px" },
		{ name: "border-0", value: "0" },
		{ name: "border-2", value: "2px" },
		{ name: "border-4", value: "4px" },
		{ name: "border-5", value: "5px" },
		{ name: "border-8", value: "8px" },
	],
};

export const borderWidthX: Dictionary = {
	category: Category.Borders,
	name: "Border X",
	mapName: "borderWidthX",
	description: "The border-x property sets an element's left and right border.",
	properties: ["border-left-width", "border-right-width"],
	dictionary: [
		{ name: "border-x", value: "1px" },
		{ name: "border-x-0", value: "0" },
		{ name: "border-x-2", value: "2px" },
		{ name: "border-x-4", value: "4px" },
		{ name: "border-x-5", value: "5px" },
		{ name: "border-x-8", value: "8px" },
	],
};

export const borderWidthY: Dictionary = {
	category: Category.Borders,
	name: "Border Y",
	mapName: "borderWidthY",
	description: "The border-y property sets an element's top and bottom border.",
	properties: ["border-top-width", "border-bottom-width"],
	dictionary: [
		{ name: "border-y", value: "1px" },
		{ name: "border-y-0", value: "0" },
		{ name: "border-y-2", value: "2px" },
		{ name: "border-y-4", value: "4px" },
		{ name: "border-y-5", value: "5px" },
		{ name: "border-y-8", value: "8px" },
	],
};

export const borderWidthTop: Dictionary = {
	category: Category.Borders,
	name: "Border Top",
	mapName: "borderWidthTop",
	description: "The border-top property sets an element's top border.",
	properties: ["border-top-width"],
	dictionary: [
		{ name: "border-t", value: "1px" },
		{ name: "border-t-0", value: "0" },
		{ name: "border-t-2", value: "2px" },
		{ name: "border-t-4", value: "4px" },
		{ name: "border-t-5", value: "5px" },
		{ name: "border-t-8", value: "8px" },
	],
};

export const borderWidthRight: Dictionary = {
	category: Category.Borders,
	name: "Border Right",
	mapName: "borderWidthRight",
	description: "The border-right property sets an element's right border.",
	properties: ["border-right-width"],
	dictionary: [
		{ name: "border-r", value: "1px" },
		{ name: "border-r-0", value: "0" },
		{ name: "border-r-2", value: "2px" },
		{ name: "border-r-4", value: "4px" },
		{ name: "border-r-5", value: "5px" },
		{ name: "border-r-8", value: "8px" },
	],
};

export const borderWidthBottom: Dictionary = {
	category: Category.Borders,
	name: "Border Bottom",
	mapName: "borderWidthBottom",
	description: "The border-bottom property sets an element's bottom border.",
	properties: ["border-bottom-width"],
	dictionary: [
		{ name: "border-b", value: "1px" },
		{ name: "border-b-0", value: "0" },
		{ name: "border-b-2", value: "2px" },
		{ name: "border-b-4", value: "4px" },
		{ name: "border-b-5", value: "5px" },
		{ name: "border-b-8", value: "8px" },
	],
};

export const borderWidthLeft: Dictionary = {
	category: Category.Borders,
	name: "Border Left",
	mapName: "borderWidthLeft",
	description: "The border-left property sets an element's left border.",
	properties: ["border-left-width"],
	dictionary: [
		{ name: "border-l", value: "1px" },
		{ name: "border-l-0", value: "0" },
		{ name: "border-l-2", value: "2px" },
		{ name: "border-l-4", value: "4px" },
		{ name: "border-l-5", value: "5px" },
		{ name: "border-l-8", value: "8px" },
	],
};
