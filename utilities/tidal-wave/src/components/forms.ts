import { Component, ComponentGroup } from "~types/component";

import colors from "@jelly/tidal/dist/guides/ts/colors";
import border from "@jelly/tidal/dist/guides/ts/border";
import sizing from "@jelly/tidal/dist/guides/ts/sizing";
import typography from "@jelly/tidal/dist/guides/ts/typography";
import layout from "@jelly/tidal/dist/guides/ts/layout";
import spacing from "@jelly/tidal/dist/guides/ts/spacing";

const formComponents: ComponentGroup = {
	name: "Forms",
	description: "Form components",
	components: [],
};

const label: Component = {
	className: "jl-label",
	base: {
		color: colors.baseTextColors.classes["text-gray-700"],
		fontSize: typography.fontSize.classes["text-sm"],
		fontWeight: typography.fontWeight.classes["font-semibold"],
	},
};

const input: Component = {
	className: "jl-input",
	base: {
		display: layout.display.classes["block"],
		width: sizing.width.classes["w-full"],
		paddingTop: spacing.paddingX.classes["px-2"],
		paddingBottom: spacing.paddingX.classes["px-2"],
		paddingLeft: spacing.paddingX.classes["px-3"],
		paddingRight: spacing.paddingX.classes["px-3"],
		backgroundColor: colors.baseBackgroundColors.classes["bg-white"],
		borderColor: colors.baseBackgroundColors.classes["bg-gray-500"],
		borderWidth: border.borderWidth.classes["border"],
		borderStyle: border.borderStyle.classes["border-solid"],
	},
};

// Todo: Add select component
const select: Component = {
	className: "jl-select",
	base: {},
};

// Todo: Add textarea component
const textarea: Component = {
	className: "jl-textarea",
	base: {},
};

// Todo: Add checkbox component
const checkbox: Component = {
	className: "jl-checkbox",
	base: {},
};

// Todo: Add radio component
const radio: Component = {
	className: "jl-radio",
	base: {},
};

formComponents.components.push(label, input, select, textarea, checkbox, radio);

export default formComponents;
