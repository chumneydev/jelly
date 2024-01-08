import typography from "@jelly/tidal/dist/guides/ts/typography";

import { Component, ComponentGroup } from "~types/component";

const textComponents: ComponentGroup = {
	name: "Font Sizes",
	description: "Text components",
	components: [],
};

const textSm: Component = {
	className: "jl-text-sm",
	base: {
		fontSize: typography.fontSize.classes["text-sm"],
		lineHeight: typography.lineHeight.classes["leading-5"],
	},
};

const textBase: Component = {
	className: "jl-text-base",
	base: {
		fontSize: typography.fontSize.classes["text-base"],
		lineHeight: typography.lineHeight.classes["leading-6"],
	},
};

const textLg: Component = {
	className: "jl-text-lg",
	base: {
		fontSize: typography.fontSize.classes["text-lg"],
		lineHeight: typography.lineHeight.classes["leading-7"],
	},
};

const textXl: Component = {
	className: "jl-text-xl",
	base: {
		fontSize: typography.fontSize.classes["text-xl"],
		lineHeight: typography.lineHeight.classes["leading-8"],
	},
};

const text2Xl: Component = {
	className: "jl-text-2xl",
	base: {
		fontSize: typography.fontSize.classes["text-2xl"],
		lineHeight: typography.lineHeight.classes["leading-9"],
	},
};

textComponents.components.push(textSm, textBase, textLg, textXl, text2Xl);

export default textComponents;
