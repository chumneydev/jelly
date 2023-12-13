import { Category } from "~types/category";

export interface DictionaryItem {
	name: string;
	value: string;
}

export interface Dictionary {
	category: string;
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
