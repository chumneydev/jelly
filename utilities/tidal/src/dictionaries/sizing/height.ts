import { Category } from "~types/category";
import { Dictionary } from "~types/dictionary";

export const height: Dictionary = {
	category: Category.Sizing,
	name: "Height",
	mapName: "height",
	description: "The height property specifies the height of an element.",
	properties: ["height"],
	dictionary: [
		{ name: "h-0", value: "0" },
		{ name: "h-1", value: "0.25rem" },
		{ name: "h-2", value: "0.5rem" },
		{ name: "h-3", value: "0.75rem" },
		{ name: "h-4", value: "1rem" },
		{ name: "h-5", value: "1.25rem" },
		{ name: "h-6", value: "1.5rem" },
		{ name: "h-7", value: "1.75rem" },
		{ name: "h-8", value: "2rem" },
		{ name: "h-9", value: "2.25rem" },
		{ name: "h-10", value: "2.5rem" },
		{ name: "h-11", value: "2.75rem" },
		{ name: "h-12", value: "3rem" },
		{ name: "h-14", value: "3.5rem" },
		{ name: "h-16", value: "4rem" },
		{ name: "h-20", value: "5rem" },
		{ name: "h-24", value: "6rem" },
		{ name: "h-28", value: "7rem" },
		{ name: "h-32", value: "8rem" },
		{ name: "h-36", value: "9rem" },
		{ name: "h-40", value: "10rem" },
		{ name: "h-44", value: "11rem" },
		{ name: "h-48", value: "12rem" },
		{ name: "h-52", value: "13rem" },
		{ name: "h-56", value: "14rem" },
		{ name: "h-60", value: "15rem" },
		{ name: "h-64", value: "16rem" },
		{ name: "h-72", value: "18rem" },
		{ name: "h-80", value: "20rem" },
		{ name: "h-96", value: "24rem" },
		{ name: "h-100", value: "25rem" },
		{ name: "h-auto", value: "auto" },
		{ name: "h-full", value: "100%" },
		{ name: "h-px", value: "1px" },
		{ name: "h-screen", value: "100vh" },
	],
};

export const minHeight: Dictionary = {
	category: Category.Sizing,
	name: "Min Height",
	mapName: "minHeight",
	description: "The min-height property specifies the minimum height of an element.",
	properties: ["min-height"],
	dictionary: [
		{ name: "min-h-0", value: "0" },
		{ name: "min-h-full", value: "100%" },
		{ name: "min-h-screen", value: "100vh" },
	],
};

export const maxHeight: Dictionary = {
	category: Category.Sizing,
	name: "Max Height",
	mapName: "maxHeight",
	description: "The max-height property specifies the maximum height of an element.",
	properties: ["max-height"],
	dictionary: [
		{ name: "max-h-0", value: "0" },
		{ name: "max-h-full", value: "100%" },
		{ name: "max-h-screen", value: "100vh" },
	],
};
