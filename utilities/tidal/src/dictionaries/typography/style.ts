import { Category } from "~types/category";
import { Dictionary } from "~types/dictionary";

export const fontStyle: Dictionary = {
	name: "Font Style",
	category: Category.Typography,
	mapName: "fontStyle",
	description: "The font-style property specifies the font style for a text.",
	properties: ["font-style"],
	dictionary: [
		{ name: "italic", value: "italic" },
		{ name: "not-italic", value: "normal" },
	],
};
