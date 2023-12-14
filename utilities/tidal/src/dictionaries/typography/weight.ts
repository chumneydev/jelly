import { Category } from "~types/category";
import { Dictionary } from "~types/dictionary";

export const fontWeight: Dictionary = {
	name: "Font Weight",
	category: Category.Typography,
	mapName: "fontWeight",
	description: "The font-weight property sets how thick or thin characters in text should be displayed.",
	properties: ["font-weight"],
	dictionary: [
		{ name: "font-thin", value: "100" },
		{ name: "font-extralight", value: "200" },
		{ name: "font-light", value: "300" },
		{ name: "font-normal", value: "400" },
		{ name: "font-medium", value: "500" },
		{ name: "font-semibold", value: "600" },
		{ name: "font-bold", value: "700" },
		{ name: "font-extrabold", value: "800" },
		{ name: "font-black", value: "900" },
	],
};
