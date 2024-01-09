import { Category } from "~types/category";
import { Dictionary } from "~types/dictionary";

export const borderStyle: Dictionary = {
	category: Category.Borders,
	name: "Border Style",
	mapName: "borderStyle",
	description: "The border-style property sets an element's border style.",
	properties: ["border-style"],
	dictionary: [
		{ name: "border-solid", value: "solid" },
		{ name: "border-dashed", value: "dashed" },
		{ name: "border-dotted", value: "dotted" },
		{ name: "border-none", value: "none" },
	],
};
