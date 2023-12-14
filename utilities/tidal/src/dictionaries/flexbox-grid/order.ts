import { Category } from "~types/category";
import { Dictionary } from "~types/dictionary";

export const order: Dictionary = {
	name: "Order",
	mapName: "order",
	category: Category.FlexboxGrid,
	description: "The order property specifies the order of a flexible item relative to the rest of the flexible items inside the same container.",
	properties: ["order"],
	dictionary: [
		{ name: "order-first", value: "-9999" },
		{ name: "order-last", value: "9999" },
		{ name: "order-none", value: "0" },
		{ name: "order-1", value: "1" },
		{ name: "order-2", value: "2" },
		{ name: "order-3", value: "3" },
		{ name: "order-4", value: "4" },
		{ name: "order-5", value: "5" },
		{ name: "order-6", value: "6" },
		{ name: "order-7", value: "7" },
		{ name: "order-8", value: "8" },
		{ name: "order-9", value: "9" },
		{ name: "order-10", value: "10" },
		{ name: "order-11", value: "11" },
		{ name: "order-12", value: "12" },
	],
};
