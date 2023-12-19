import { Category } from "~types/category";
import { Guide } from "~types/guide";
import createVariantFromDictionary from "~lib/utils/createVariantFromDictionary";

import { transitionProperty, transitionTimingFunction, transitionDuration } from "@dictionaries/animation/transition";

const guideTransition: Guide = {
	name: "Transition",
	category: Category.Animation,
	description: "A guide to the transition properties used in the design system.",
	variants: [...createVariantFromDictionary(transitionProperty), ...createVariantFromDictionary(transitionTimingFunction), ...createVariantFromDictionary(transitionDuration)],
};

export default guideTransition;
