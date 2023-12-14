import { Category } from "~types/category";
import { Dictionary } from "~types/dictionary";

export const listStyle: Dictionary = {
	name: "List Style",
	category: Category.Typography,
	mapName: "listStyle",
	description: "The list-style property is a shorthand property for setting list-style-type, list-style-position and list-style-image.",
	properties: ["list-style-type"],
	dictionary: [
		{ name: "list-none", value: "none" },
		{ name: "list-disc", value: "disc" },
		{ name: "list-decimal", value: "decimal" },
	],
};
