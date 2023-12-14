import { Category } from "~types/category";
import { Guide } from "~types/guide";
import createVariantFromDictionary from "~lib/utils/createVariantFromDictionary";

import { boxBottom, boxInset, boxInsetX, boxInsetY, boxLeft, boxRight, boxTop } from "@dictionaries/layout/box";
import { columns } from "@dictionaries/layout/columns";
import { display } from "@dictionaries/layout/display";
import { position } from "@dictionaries/layout/position";
import { zIndex } from "@dictionaries/layout/z-index";

const guideLayout: Guide = {
	name: "Layout",
	category: Category.Layout,
	description: "A guide to the layout used in the design system.",
	variants: [
		...createVariantFromDictionary(boxInset),
		...createVariantFromDictionary(boxInsetX),
		...createVariantFromDictionary(boxInsetY),
		...createVariantFromDictionary(boxTop),
		...createVariantFromDictionary(boxRight),
		...createVariantFromDictionary(boxBottom),
		...createVariantFromDictionary(boxLeft),
		...createVariantFromDictionary(columns),
		...createVariantFromDictionary(display),
		...createVariantFromDictionary(position),
		...createVariantFromDictionary(zIndex),
	],
};

export default guideLayout;
