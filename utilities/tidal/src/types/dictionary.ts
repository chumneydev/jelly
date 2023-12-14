import { Category } from "~types/category";

export interface DictionaryItem {
	name: string;
	value: string;
}

export interface Dictionary {
	category: Category;
	name: string;
	mapName: string;
	description: string;
	properties: string[];
	dictionary: DictionaryItem[];
}

export interface DictionaryList {
	category: Category;
	dictionaries: Dictionary[];
}
