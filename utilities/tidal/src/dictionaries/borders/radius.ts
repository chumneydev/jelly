import { Category } from "~types/category";
import { Dictionary } from "~types/dictionary";

export const borderRadius: Dictionary = {
	category: Category.Borders,
	name: "Border Radius",
	mapName: "borderRadius",
	description: "The border-radius property sets an element's rounded corners.",
	properties: ["border-radius"],
	dictionary: [
		{ name: "rounded-none", value: "0" },
		{ name: "rounded-sm", value: "0.125rem" },
		{ name: "rounded", value: "0.25rem" },
		{ name: "rounded-md", value: "0.375rem" },
		{ name: "rounded-lg", value: "0.5rem" },
		{ name: "rounded-xl", value: "0.75rem" },
		{ name: "rounded-2xl", value: "1rem" },
		{ name: "rounded-3xl", value: "1.5rem" },
		{ name: "rounded-full", value: "9999px" },
	],
};

export const borderRadiusTop: Dictionary = {
	category: Category.Borders,
	name: "Border Radius Top",
	mapName: "borderRadiusTop",
	description: "The border-radius-top property sets an element's top rounded corners.",
	properties: ["border-top-left-radius", "border-top-right-radius"],
	dictionary: [
		{ name: "rounded-t-none", value: "0" },
		{ name: "rounded-t-sm", value: "0.125rem" },
		{ name: "rounded-t", value: "0.25rem" },
		{ name: "rounded-t-md", value: "0.375rem" },
		{ name: "rounded-t-lg", value: "0.5rem" },
		{ name: "rounded-t-xl", value: "0.75rem" },
		{ name: "rounded-t-2xl", value: "1rem" },
		{ name: "rounded-t-3xl", value: "1.5rem" },
		{ name: "rounded-t-full", value: "9999px" },
	],
};

export const borderRadiusRight: Dictionary = {
	category: Category.Borders,
	name: "Border Radius Right",
	mapName: "borderRadiusRight",
	description: "The border-radius-right property sets an element's right rounded corners.",
	properties: ["border-top-right-radius", "border-bottom-right-radius"],
	dictionary: [
		{ name: "rounded-r-none", value: "0" },
		{ name: "rounded-r-sm", value: "0.125rem" },
		{ name: "rounded-r", value: "0.25rem" },
		{ name: "rounded-r-md", value: "0.375rem" },
		{ name: "rounded-r-lg", value: "0.5rem" },
		{ name: "rounded-r-xl", value: "0.75rem" },
		{ name: "rounded-r-2xl", value: "1rem" },
		{ name: "rounded-r-3xl", value: "1.5rem" },
		{ name: "rounded-r-full", value: "9999px" },
	],
};

export const borderRadiusBottom: Dictionary = {
	category: Category.Borders,
	name: "Border Radius Bottom",
	mapName: "borderRadiusBottom",
	description: "The border-radius-bottom property sets an element's bottom rounded corners.",
	properties: ["border-bottom-left-radius", "border-bottom-right-radius"],
	dictionary: [
		{ name: "rounded-b-none", value: "0" },
		{ name: "rounded-b-sm", value: "0.125rem" },
		{ name: "rounded-b", value: "0.25rem" },
		{ name: "rounded-b-md", value: "0.375rem" },
		{ name: "rounded-b-lg", value: "0.5rem" },
		{ name: "rounded-b-xl", value: "0.75rem" },
		{ name: "rounded-b-2xl", value: "1rem" },
		{ name: "rounded-b-3xl", value: "1.5rem" },
		{ name: "rounded-b-full", value: "9999px" },
	],
};

export const borderRadiusLeft: Dictionary = {
	category: Category.Borders,
	name: "Border Radius Left",
	mapName: "borderRadiusLeft",
	description: "The border-radius-left property sets an element's left rounded corners.",
	properties: ["border-top-left-radius", "border-bottom-left-radius"],
	dictionary: [
		{ name: "rounded-l-none", value: "0" },
		{ name: "rounded-l-sm", value: "0.125rem" },
		{ name: "rounded-l", value: "0.25rem" },
		{ name: "rounded-l-md", value: "0.375rem" },
		{ name: "rounded-l-lg", value: "0.5rem" },
		{ name: "rounded-l-xl", value: "0.75rem" },
		{ name: "rounded-l-2xl", value: "1rem" },
		{ name: "rounded-l-3xl", value: "1.5rem" },
		{ name: "rounded-l-full", value: "9999px" },
	],
};
