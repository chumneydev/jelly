import { Category, Modifier } from "~types/category";
import { DictionaryItem } from "~types/dictionary";

export interface Guide {
	category: Category;
	name: string;
	description?: string;
	variants: Variant[];
}

export interface GuideList {
	guides: Guide[];
}

export interface Variant {
	prefix: string;
	properties: string[];
	classes: DictionaryItem[];
	modifiers?: Modifier[];
	breakpoints?: { [key: string]: DictionaryItem[] }[];
}
