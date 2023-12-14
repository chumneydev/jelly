import { Category } from "~types/category";
import { Dictionary } from "~types/dictionary";

export const zIndex: Dictionary = {
	category: Category.Layout,
	name: "Z-Index",
	mapName: "zIndex",
	description: "The z-index property specifies the stack order of an element.",
	properties: ["z-index"],
	dictionary: [
		{ name: "z-0", value: "0" },
		{ name: "z-10", value: "10" },
		{ name: "z-20", value: "20" },
		{ name: "z-30", value: "30" },
		{ name: "z-40", value: "40" },
		{ name: "z-50", value: "50" },
		{ name: "z-60", value: "60" },
		{ name: "z-70", value: "70" },
		{ name: "z-80", value: "80" },
		{ name: "z-90", value: "90" },
		{ name: "z-100", value: "100" },
		{ name: "z-auto", value: "auto" },
	],
};
