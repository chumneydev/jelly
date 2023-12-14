import { Category } from "~types/category";
import { Guide } from "~types/guide";
import createVariantFromDictionary from "~lib/utils/createVariantFromDictionary";

import { breakpoints } from "@dictionaries/misc/breakpoints";

const guideMiscellaneous: Guide = {
	name: "Miscellaneous",
	category: Category.Miscellaneous,
	description: "A guide to the miscellaneous styles used in the design system.",
	variants: [...createVariantFromDictionary(breakpoints)],
};

export default guideMiscellaneous;
