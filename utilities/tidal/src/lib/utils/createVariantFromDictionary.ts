import { Dictionary, DictionaryItem } from "~types/dictionary";
import { Variant } from "~types/guide";

const createVariantFromDictionary = (
	dictionary: Dictionary,
	nameGenerator: (prefix: string, dictionaryName: string, className: string) => string = (_prefix, _, className) => `${className}`,
): Variant[] => {
	const classes: DictionaryItem[] = dictionary.dictionary.map((cls: DictionaryItem) => ({
		name: nameGenerator(dictionary.mapName, dictionary.name, cls.name),
		value: cls.value,
	}));

	return [
		{
			prefix: `${dictionary.mapName}`,
			properties: dictionary.properties,
			classes: classes,
		},
	];
};

export default createVariantFromDictionary;
