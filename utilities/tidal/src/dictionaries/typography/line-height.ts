import { Category } from "~types/category";
import { Dictionary } from "~types/dictionary";

export const lineHeight: Dictionary = {
	name: "Line Height",
	category: Category.Typography,
	mapName: "lineHeight",
	description: "The line-height property specifies the height of a line.",
	properties: ["line-height"],
	dictionary: [
		{ name: "leading-3", value: ".75rem" },
		{ name: "leading-4", value: "1rem" },
		{ name: "leading-5", value: "1.25rem" },
		{ name: "leading-6", value: "1.5rem" },
		{ name: "leading-7", value: "1.75rem" },
		{ name: "leading-8", value: "2rem" },
		{ name: "leading-9", value: "2.25rem" },
		{ name: "leading-10", value: "2.5rem" },
		{ name: "leading-none", value: "1" },
		{ name: "leading-tight", value: "1.25" },
		{ name: "leading-normal", value: "1.5" },
		{ name: "leading-loose", value: "2" },
	],
};
