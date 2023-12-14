import { Category } from "~types/category";
import { Dictionary } from "~types/dictionary";

export const breakpoints: Dictionary = {
	category: Category.Miscellaneous,
	name: "Breakpoints",
	mapName: "breakpoints",
	description: "The breakpoints property specifies the breakpoints of an element.",
	properties: ["breakpoints"],
	dictionary: [
		{ name: "sm", value: "640px" },
		{ name: "md", value: "768px" },
		{ name: "lg", value: "1024px" },
		{ name: "xl", value: "1280px" },
		{ name: "2xl", value: "1536px" },
	],
};
