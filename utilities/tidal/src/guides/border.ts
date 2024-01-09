import { Category } from "~types/category";
import { Guide } from "~types/guide";
import createVariantFromDictionary from "~lib/utils/createVariantFromDictionary";

import { borderWidth, borderWidthBottom, borderWidthLeft, borderWidthRight, borderWidthTop, borderWidthX, borderWidthY } from "@dictionaries/borders/width";
import { borderColor } from "@dictionaries/borders/color";
import { borderStyle } from "@dictionaries/borders/style";
import { borderRadius, borderRadiusBottom, borderRadiusLeft, borderRadiusRight, borderRadiusTop } from "@dictionaries/borders/radius";

const guideBorder: Guide = {
	name: "Border",
	category: Category.Borders,
	description: "A guide to border styles used in the design system.",
	variants: [
		...createVariantFromDictionary(borderStyle),
		...createVariantFromDictionary(borderWidth),
		...createVariantFromDictionary(borderWidthTop),
		...createVariantFromDictionary(borderWidthRight),
		...createVariantFromDictionary(borderWidthBottom),
		...createVariantFromDictionary(borderWidthLeft),
		...createVariantFromDictionary(borderWidthRight),
		...createVariantFromDictionary(borderRadius),
		...createVariantFromDictionary(borderRadiusTop),
		...createVariantFromDictionary(borderRadiusRight),
		...createVariantFromDictionary(borderRadiusBottom),
		...createVariantFromDictionary(borderRadiusLeft),
		...createVariantFromDictionary(borderColor),
	],
};

export default guideBorder;
