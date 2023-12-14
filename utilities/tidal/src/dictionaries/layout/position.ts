import { Category } from "~types/category";
import { Dictionary } from "~types/dictionary";

export const position: Dictionary = {
	category: Category.Layout,
	name: "Position",
	mapName: "position",
	description: "The position property specifies the type of positioning method used for an element.",
	properties: ["position"],
	dictionary: [
		{ name: "static", value: "static" },
		{ name: "fixed", value: "fixed" },
		{ name: "absolute", value: "absolute" },
		{ name: "relative", value: "relative" },
		{ name: "sticky", value: "sticky" },
	],
};
