import { Category } from "~types/category";
import { Dictionary } from "~types/dictionary";

export const transitionProperty: Dictionary = {
	name: "Transition Property",
	category: Category.Animation,
	mapName: "transitionProperty",
	description: "The transition-property property specifies the name of the CSS property the transition effect is for.",
	properties: ["transition-property"],
	dictionary: [
		{ name: "transition-none", value: "none" },
		{ name: "transition-all", value: "all" },
		{ name: "transition-colors", value: "colors" },
		{ name: "transition-background", value: "background-color" },
		{ name: "transition-opacity", value: "opacity" },
		{ name: "transition-shadow", value: "shadow" },
		{ name: "transition-transform", value: "transform" },
	],
};

export const transitionTimingFunction: Dictionary = {
	name: "Transition Timing Function",
	category: Category.Animation,
	mapName: "transitionTimingFunction",
	description: "The transition-timing-function property specifies the speed curve of the transition effect.",
	properties: ["transition-timing-function"],
	dictionary: [
		{ name: "ease-linear", value: "linear" },
		{ name: "ease-in", value: "cubic-bezier(0.4, 0, 1, 1)" },
		{ name: "ease-out", value: "cubic-bezier(0, 0, 0.2, 1)" },
		{ name: "ease-in-out", value: "cubic-bezier(0.4, 0, 0.2, 1)" },
	],
};
export const transitionDuration: Dictionary = {
	name: "Transition Duration",
	category: Category.Animation,
	mapName: "transitionDuration",
	description: "The transition-duration property specifies how many seconds (s) or milliseconds (ms) a transition effect takes to complete.",
	properties: ["transition-duration"],
	dictionary: [
		{ name: "duration-75", value: "75ms" },
		{ name: "duration-100", value: "100ms" },
		{ name: "duration-150", value: "150ms" },
		{ name: "duration-200", value: "200ms" },
		{ name: "duration-300", value: "300ms" },
		{ name: "duration-500", value: "500ms" },
		{ name: "duration-700", value: "700ms" },
		{ name: "duration-1000", value: "1000ms" },
	],
};
