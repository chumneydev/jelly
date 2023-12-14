import { Category } from "~types/category";
import { Guide } from "~types/guide";
import createVariantFromDictionary from "~lib/utils/createVariantFromDictionary";

import { baseBackgroundColors, baseTextColors } from "@dictionaries/colors/base";
import { brandsBackgroundColors, brandsTextColors } from "@dictionaries/colors/brands";

const guideColors: Guide = {
	name: "Colors",
	category: Category.Colors,
	description: "A guide to the colors used in the design system.",
	variants: [
		...createVariantFromDictionary(baseTextColors),
		...createVariantFromDictionary(baseBackgroundColors),
		...createVariantFromDictionary(brandsTextColors),
		...createVariantFromDictionary(brandsBackgroundColors),
	],
};

export default guideColors;
