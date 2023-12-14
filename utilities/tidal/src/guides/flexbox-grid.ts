import { Category } from "~types/category";
import { Guide } from "~types/guide";
import createVariantFromDictionary from "~lib/utils/createVariantFromDictionary";

import {
	gridAutoColumns,
	gridAutoFlow,
	gridAutoRows,
	gridColumnsEnd,
	gridColumnsSpan,
	gridColumnsStart,
	gridRowsEnd,
	gridRowsSpan,
	gridRowsStart,
	gridTemplateColumns,
	gridTemplateRows,
} from "@dictionaries/flexbox-grid/grid";
import { flexGrow, flexboxDirection, flexboxWrap } from "@dictionaries/flexbox-grid/flexbox";
import { gap } from "@dictionaries/flexbox-grid/gap";
import { order } from "@dictionaries/flexbox-grid/order";
import { alignContent, alignItems, justifyContent, justifyItems, justifySelf } from "@dictionaries/flexbox-grid/alignment";

const guideFlexboxGrid: Guide = {
	name: "Flexbox Grid",
	category: Category.FlexboxGrid,
	description: "A guide to the flexbox grid used in the design system.",
	variants: [
		...createVariantFromDictionary(gridTemplateColumns),
		...createVariantFromDictionary(gridColumnsSpan),
		...createVariantFromDictionary(gridColumnsStart),
		...createVariantFromDictionary(gridColumnsEnd),
		...createVariantFromDictionary(gridTemplateRows),
		...createVariantFromDictionary(gridRowsSpan),
		...createVariantFromDictionary(gridRowsStart),
		...createVariantFromDictionary(gridRowsEnd),
		...createVariantFromDictionary(gridAutoFlow),
		...createVariantFromDictionary(gridAutoColumns),
		...createVariantFromDictionary(gridAutoRows),
		...createVariantFromDictionary(flexboxDirection),
		...createVariantFromDictionary(flexboxWrap),
		...createVariantFromDictionary(flexGrow),
		...createVariantFromDictionary(gap),
		...createVariantFromDictionary(order),
		...createVariantFromDictionary(justifyContent),
		...createVariantFromDictionary(justifyItems),
		...createVariantFromDictionary(justifySelf),
		...createVariantFromDictionary(alignContent),
		...createVariantFromDictionary(alignItems),
	],
};

export default guideFlexboxGrid;
