import { Category } from "~types/category";
import { Dictionary } from "~types/dictionary";

import { baseColors } from "@dictionaries/colors/base";
import { brandsColors } from "@dictionaries/colors/brands";

export const borderColor: Dictionary = {
	category: Category.Borders,
	name: "Border Color",
	mapName: "borderColor",
	description: "The border-color property sets an element's border color.",
	properties: ["border-color"],
	dictionary: [
		...baseColors.flatMap((color) => color.dictionary.map((item) => ({ name: `border-${item.name}`, value: item.value }))),
		...brandsColors.flatMap((color) => color.dictionary.map((item) => ({ name: `border-${item.name}`, value: item.value }))),
	],
};

export const borderColorX: Dictionary = {
	category: Category.Borders,
	name: "Border Color X",
	mapName: "borderColorX",
	description: "The border-color-x property sets an element's left and right border color.",
	properties: ["border-left-color", "border-right-color"],
	dictionary: [
		...baseColors.flatMap((color) => color.dictionary.map((item) => ({ name: `border-x-${item.name}`, value: item.value }))),
		...brandsColors.flatMap((color) => color.dictionary.map((item) => ({ name: `border-x-${item.name}`, value: item.value }))),
	],
};

export const borderColorY: Dictionary = {
	category: Category.Borders,
	name: "Border Color Y",
	mapName: "borderColorY",
	description: "The border-color-y property sets an element's top and bottom border color.",
	properties: ["border-top-color", "border-bottom-color"],
	dictionary: [
		...baseColors.flatMap((color) => color.dictionary.map((item) => ({ name: `border-y-${item.name}`, value: item.value }))),
		...brandsColors.flatMap((color) => color.dictionary.map((item) => ({ name: `border-y-${item.name}`, value: item.value }))),
	],
};

export const borderColorTop: Dictionary = {
	category: Category.Borders,
	name: "Border Color Top",
	mapName: "borderColorTop",
	description: "The border-color-top property sets an element's top border color.",
	properties: ["border-top-color"],
	dictionary: [
		...baseColors.flatMap((color) => color.dictionary.map((item) => ({ name: `border-t-${item.name}`, value: item.value }))),
		...brandsColors.flatMap((color) => color.dictionary.map((item) => ({ name: `border-t-${item.name}`, value: item.value }))),
	],
};

export const borderColorRight: Dictionary = {
	category: Category.Borders,
	name: "Border Color Right",
	mapName: "borderColorRight",
	description: "The border-color-right property sets an element's right border color.",
	properties: ["border-right-color"],
	dictionary: [
		...baseColors.flatMap((color) => color.dictionary.map((item) => ({ name: `border-r-${item.name}`, value: item.value }))),
		...brandsColors.flatMap((color) => color.dictionary.map((item) => ({ name: `border-r-${item.name}`, value: item.value }))),
	],
};

export const borderColorBottom: Dictionary = {
	category: Category.Borders,
	name: "Border Color Bottom",
	mapName: "borderColorBottom",
	description: "The border-color-bottom property sets an element's bottom border color.",
	properties: ["border-bottom-color"],
	dictionary: [
		...baseColors.flatMap((color) => color.dictionary.map((item) => ({ name: `border-b-${item.name}`, value: item.value }))),
		...brandsColors.flatMap((color) => color.dictionary.map((item) => ({ name: `border-b-${item.name}`, value: item.value }))),
	],
};

export const borderColorLeft: Dictionary = {
	category: Category.Borders,
	name: "Border Color Left",
	mapName: "borderColorLeft",
	description: "The border-color-left property sets an element's left border color.",
	properties: ["border-left-color"],
	dictionary: [
		...baseColors.flatMap((color) => color.dictionary.map((item) => ({ name: `border-l-${item.name}`, value: item.value }))),
		...brandsColors.flatMap((color) => color.dictionary.map((item) => ({ name: `border-l-${item.name}`, value: item.value }))),
	],
};
