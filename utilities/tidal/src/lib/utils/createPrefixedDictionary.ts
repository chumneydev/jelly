import { Dictionary } from "~types/dictionary";

const createPrefixedDictionary = (property: string, dictionaries: Dictionary[]) => {
	return dictionaries.flatMap((dictionary) => {
		return dictionary.dictionary.map((item) => ({
			name: `${property}-${item.name}`,
			value: item.value,
		}));
	});
};

export default createPrefixedDictionary;
