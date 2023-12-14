import { Category } from "~types/category";
import { Guide } from "~types/guide";
import createVariantFromDictionary from "~lib/utils/createVariantFromDictionary";

import { fontSize } from "@dictionaries/typography/size";
import { fontWeight } from "@dictionaries/typography/weight";
import { lineHeight } from "@dictionaries/typography/line-height";
import { fontStyle } from "@dictionaries/typography/style";
import { listStyle } from "@dictionaries/typography/list-style";

const guideTypography: Guide = {
	name: "Typography",
	category: Category.Typography,
	description: "A guide to the typography used in the design system.",
	variants: [
		...createVariantFromDictionary(fontSize),
		...createVariantFromDictionary(fontWeight),
		...createVariantFromDictionary(fontStyle),
		...createVariantFromDictionary(lineHeight),
		...createVariantFromDictionary(listStyle),
	],
};

export default guideTypography;
