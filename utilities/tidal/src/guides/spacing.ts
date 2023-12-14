import { Category } from "~types/category";
import { Guide } from "~types/guide";
import createVariantFromDictionary from "~lib/utils/createVariantFromDictionary";

import { marginBottom, marginLeft, marginRight, marginTop, marginX, marginY } from "@dictionaries/spacing/margin";
import { paddingBottom, paddingLeft, paddingRight, paddingTop, paddingX, paddingY } from "@dictionaries/spacing/padding";

const guideSpacing: Guide = {
	name: "Spacing",
	category: Category.Spacing,
	description: "A guide to the spacing used in the design system.",
	variants: [
		...createVariantFromDictionary(marginX),
		...createVariantFromDictionary(marginY),
		...createVariantFromDictionary(marginTop),
		...createVariantFromDictionary(marginRight),
		...createVariantFromDictionary(marginBottom),
		...createVariantFromDictionary(marginLeft),
		...createVariantFromDictionary(paddingX),
		...createVariantFromDictionary(paddingY),
		...createVariantFromDictionary(paddingTop),
		...createVariantFromDictionary(paddingRight),
		...createVariantFromDictionary(paddingBottom),
		...createVariantFromDictionary(paddingLeft),
	],
};

export default guideSpacing;
