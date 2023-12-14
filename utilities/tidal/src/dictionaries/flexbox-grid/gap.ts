import { Category } from "~types/category";
import { Dictionary } from "~types/dictionary";

export const gap: Dictionary = {
	name: "Gap",
	category: Category.FlexboxGrid,
	mapName: "gap",
	description: "The gap property specifies the gap between the rows and columns.",
	properties: ["gap"],
	dictionary: [
		{ name: "gap-0", value: "0" },
		{ name: "gap-1", value: "0.25rem" },
		{ name: "gap-2", value: "0.5rem" },
		{ name: "gap-3", value: "0.75rem" },
		{ name: "gap-4", value: "1rem" },
		{ name: "gap-5", value: "1.25rem" },
		{ name: "gap-6", value: "1.5rem" },
		{ name: "gap-8", value: "2rem" },
		{ name: "gap-10", value: "2.5rem" },
		{ name: "gap-12", value: "3rem" },
		{ name: "gap-16", value: "4rem" },
		{ name: "gap-20", value: "5rem" },
		{ name: "gap-24", value: "6rem" },
		{ name: "gap-32", value: "8rem" },
		{ name: "gap-40", value: "10rem" },
		{ name: "gap-48", value: "12rem" },
		{ name: "gap-56", value: "14rem" },
		{ name: "gap-64", value: "16rem" },
	],
};
