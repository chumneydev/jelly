import { Category } from "~types/category";
import { Dictionary } from "~types/dictionary";

export const gridTemplateColumns: Dictionary = {
	name: "Template Columns",
	category: Category.FlexboxGrid,
	mapName: "templateColumns",
	description: "The template-columns property specifies the number (and the widths) of columns in a grid layout.",
	properties: ["grid-template-columns"],
	dictionary: [
		{ name: "grid-cols-1", value: "repeat(1, minmax(0, 1fr))" },
		{ name: "grid-cols-2", value: "repeat(2, minmax(0, 1fr))" },
		{ name: "grid-cols-3", value: "repeat(3, minmax(0, 1fr))" },
		{ name: "grid-cols-4", value: "repeat(4, minmax(0, 1fr))" },
		{ name: "grid-cols-5", value: "repeat(5, minmax(0, 1fr))" },
		{ name: "grid-cols-6", value: "repeat(6, minmax(0, 1fr))" },
		{ name: "grid-cols-7", value: "repeat(7, minmax(0, 1fr))" },
		{ name: "grid-cols-8", value: "repeat(8, minmax(0, 1fr))" },
		{ name: "grid-cols-9", value: "repeat(9, minmax(0, 1fr))" },
		{ name: "grid-cols-10", value: "repeat(10, minmax(0, 1fr))" },
		{ name: "grid-cols-11", value: "repeat(11, minmax(0, 1fr))" },
		{ name: "grid-cols-12", value: "repeat(12, minmax(0, 1fr))" },
	],
};

export const gridColumnsSpan: Dictionary = {
	name: "Columns Span",
	category: Category.FlexboxGrid,
	mapName: "columnsSpan",
	description: "The columns-span property specifies the number of columns an item should span across.",
	properties: ["grid-column"],
	dictionary: [
		{ name: "col-auto", value: "auto" },
		{ name: "col-span-1", value: "span 1 / span 1" },
		{ name: "col-span-2", value: "span 2 / span 2" },
		{ name: "col-span-3", value: "span 3 / span 3" },
		{ name: "col-span-4", value: "span 4 / span 4" },
		{ name: "col-span-5", value: "span 5 / span 5" },
		{ name: "col-span-6", value: "span 6 / span 6" },
		{ name: "col-span-7", value: "span 7 / span 7" },
		{ name: "col-span-8", value: "span 8 / span 8" },
		{ name: "col-span-9", value: "span 9 / span 9" },
		{ name: "col-span-10", value: "span 10 / span 10" },
		{ name: "col-span-11", value: "span 11 / span 11" },
		{ name: "col-span-12", value: "span 12 / span 12" },
	],
};

export const gridColumnsStart: Dictionary = {
	name: "Columns Start",
	category: Category.FlexboxGrid,
	mapName: "columnsStart",
	description: "The columns-start property specifies where to start the columns.",
	properties: ["grid-column-start"],
	dictionary: [
		{ name: "col-start-1", value: "1" },
		{ name: "col-start-2", value: "2" },
		{ name: "col-start-3", value: "3" },
		{ name: "col-start-4", value: "4" },
		{ name: "col-start-5", value: "5" },
		{ name: "col-start-6", value: "6" },
		{ name: "col-start-7", value: "7" },
		{ name: "col-start-8", value: "8" },
		{ name: "col-start-9", value: "9" },
		{ name: "col-start-10", value: "10" },
		{ name: "col-start-11", value: "11" },
		{ name: "col-start-12", value: "12" },
		{ name: "col-start-13", value: "13" },
		{ name: "col-start-auto", value: "auto" },
	],
};

export const gridColumnsEnd: Dictionary = {
	name: "Columns End",
	category: Category.FlexboxGrid,
	mapName: "columnsEnd",
	description: "The columns-end property specifies where to end the columns.",
	properties: ["grid-column-end"],
	dictionary: [
		{ name: "col-end-1", value: "1" },
		{ name: "col-end-2", value: "2" },
		{ name: "col-end-3", value: "3" },
		{ name: "col-end-4", value: "4" },
		{ name: "col-end-5", value: "5" },
		{ name: "col-end-6", value: "6" },
		{ name: "col-end-7", value: "7" },
		{ name: "col-end-8", value: "8" },
		{ name: "col-end-9", value: "9" },
		{ name: "col-end-10", value: "10" },
		{ name: "col-end-11", value: "11" },
		{ name: "col-end-12", value: "12" },
		{ name: "col-end-13", value: "13" },
		{ name: "col-end-auto", value: "auto" },
	],
};

export const gridTemplateRows: Dictionary = {
	name: "Template Rows",
	category: Category.FlexboxGrid,
	mapName: "templateRows",
	description: "The template-rows property specifies the number (and the heights) of the rows in a grid layout.",
	properties: ["grid-template-rows"],
	dictionary: [
		{ name: "grid-rows-1", value: "repeat(1, minmax(0, 1fr))" },
		{ name: "grid-rows-2", value: "repeat(2, minmax(0, 1fr))" },
		{ name: "grid-rows-3", value: "repeat(3, minmax(0, 1fr))" },
		{ name: "grid-rows-4", value: "repeat(4, minmax(0, 1fr))" },
		{ name: "grid-rows-5", value: "repeat(5, minmax(0, 1fr))" },
		{ name: "grid-rows-6", value: "repeat(6, minmax(0, 1fr))" },
	],
};

export const gridRowsSpan: Dictionary = {
	name: "Rows Span",
	category: Category.FlexboxGrid,
	mapName: "rowsSpan",
	description: "The rows-span property specifies the number of rows an item should span across.",
	properties: ["grid-row"],
	dictionary: [
		{ name: "row-auto", value: "auto" },
		{ name: "row-span-1", value: "span 1 / span 1" },
		{ name: "row-span-2", value: "span 2 / span 2" },
		{ name: "row-span-3", value: "span 3 / span 3" },
		{ name: "row-span-4", value: "span 4 / span 4" },
		{ name: "row-span-5", value: "span 5 / span 5" },
		{ name: "row-span-6", value: "span 6 / span 6" },
	],
};

export const gridRowsStart: Dictionary = {
	name: "Rows Start",
	category: Category.FlexboxGrid,
	mapName: "rowsStart",
	description: "The rows-start property specifies where to start the rows.",
	properties: ["grid-row-start"],
	dictionary: [
		{ name: "row-start-1", value: "1" },
		{ name: "row-start-2", value: "2" },
		{ name: "row-start-3", value: "3" },
		{ name: "row-start-4", value: "4" },
		{ name: "row-start-5", value: "5" },
		{ name: "row-start-6", value: "6" },
		{ name: "row-start-7", value: "7" },
		{ name: "row-start-auto", value: "auto" },
	],
};

export const gridRowsEnd: Dictionary = {
	name: "Rows End",
	category: Category.FlexboxGrid,
	mapName: "rowsEnd",
	description: "The rows-end property specifies where to end the rows.",
	properties: ["grid-row-end"],
	dictionary: [
		{ name: "row-end-1", value: "1" },
		{ name: "row-end-2", value: "2" },
		{ name: "row-end-3", value: "3" },
		{ name: "row-end-4", value: "4" },
		{ name: "row-end-5", value: "5" },
		{ name: "row-end-6", value: "6" },
		{ name: "row-end-7", value: "7" },
		{ name: "row-end-auto", value: "auto" },
	],
};

export const gridAutoFlow: Dictionary = {
	name: "Auto Flow",
	category: Category.FlexboxGrid,
	mapName: "autoFlow",
	description: "The auto-flow property specifies how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.",
	properties: ["grid-auto-flow"],
	dictionary: [
		{ name: "grid-flow-row", value: "row" },
		{ name: "grid-flow-col", value: "column" },
		{ name: "grid-flow-row-dense", value: "row dense" },
		{ name: "grid-flow-col-dense", value: "column dense" },
	],
};

export const gridAutoColumns: Dictionary = {
	name: "Auto Columns",
	category: Category.FlexboxGrid,
	mapName: "autoColumns",
	description: "The auto-columns property specifies the size of any auto-generated column.",
	properties: ["grid-auto-columns"],
	dictionary: [
		{ name: "auto-cols-auto", value: "auto" },
		{ name: "auto-cols-min", value: "min-content" },
		{ name: "auto-cols-max", value: "max-content" },
		{ name: "auto-cols-fr", value: "minmax(0, 1fr)" },
	],
};

export const gridAutoRows: Dictionary = {
	name: "Auto Rows",
	category: Category.FlexboxGrid,
	mapName: "autoRows",
	description: "The auto-rows property specifies the size of any auto-generated row.",
	properties: ["grid-auto-rows"],
	dictionary: [
		{ name: "auto-rows-auto", value: "auto" },
		{ name: "auto-rows-min", value: "min-content" },
		{ name: "auto-rows-max", value: "max-content" },
		{ name: "auto-rows-fr", value: "minmax(0, 1fr)" },
	],
};
