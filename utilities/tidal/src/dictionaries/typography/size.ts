import { Category } from "~types/category";
import { Dictionary } from "~types/dictionary";

export const fontSize: Dictionary = {
	name: "Font Size",
	category: Category.Typography,
	mapName: "fontSize",
	description: "The font-size property sets the size of the font.",
	properties: ["font-size"],
	dictionary: [
		{ name: "text-xs", value: "0.75rem" },
		{ name: "text-sm", value: "0.875rem" },
		{ name: "text-base", value: "1rem" },
		{ name: "text-lg", value: "1.125rem" },
		{ name: "text-xl", value: "1.25rem" },
		{ name: "text-2xl", value: "1.5rem" },
		{ name: "text-3xl", value: "1.875rem" },
		{ name: "text-4xl", value: "2.25rem" },
		{ name: "text-5xl", value: "3rem" },
		{ name: "text-6xl", value: "3.75rem" },
		{ name: "text-7xl", value: "4.5rem" },
		{ name: "text-8xl", value: "6rem" },
		{ name: "text-9xl", value: "8rem" },
	],
};
