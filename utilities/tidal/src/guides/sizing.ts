import { Category } from "~types/category";
import { Guide } from "~types/guide";
import createVariantFromDictionary from "~lib/utils/createVariantFromDictionary";

import { height, maxHeight, minHeight } from "@dictionaries/sizing/height";
import { maxWidth, minWidth, width } from "@dictionaries/sizing/widths";
import { spaceBetweenX, spaceBetweenY } from "@dictionaries/sizing/space-between";

const guideSizing: Guide = {
	name: "Sizing",
	category: Category.Sizing,
	description: "A guide to the sizing used in the design system.",
	variants: [
		...createVariantFromDictionary(height),
		...createVariantFromDictionary(minHeight),
		...createVariantFromDictionary(maxHeight),
		...createVariantFromDictionary(width),
		...createVariantFromDictionary(minWidth),
		...createVariantFromDictionary(maxWidth),
		...createVariantFromDictionary(spaceBetweenX),
		...createVariantFromDictionary(spaceBetweenY),
	],
};

export default guideSizing;
