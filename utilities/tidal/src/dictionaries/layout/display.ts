import { Category } from "~types/category";
import { Dictionary } from "~types/dictionary";

export const display: Dictionary = {
	category: Category.Layout,
	name: "Display",
	mapName: "display",
	description: "The display property specifies the display behavior (the type of rendering box) of an element.",
	properties: ["display"],
	dictionary: [
		{ name: "block", value: "block" },
		{ name: "inline-block", value: "inline-block" },
		{ name: "inline", value: "inline" },
		{ name: "flex", value: "flex" },
		{ name: "inline-flex", value: "inline-flex" },
		{ name: "grid", value: "grid" },
		{ name: "inline-grid", value: "inline-grid" },
		{ name: "contents", value: "contents" },
		{ name: "hidden", value: "hidden" },
	],
};
