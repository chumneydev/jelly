// Import Button component styles from @jelly/tidal
import colors from "@jelly/tidal/dist/guides/ts/colors";
import layout from "@jelly/tidal/dist/guides/ts/layout";
import flexboxGrid from "@jelly/tidal/dist/guides/ts/flexbox-grid";
import spacing from "@jelly/tidal/dist/guides/ts/spacing";

import { Component, ComponentGroup } from "~types/component";
import createButtonComponents from "~lib/utils/createButtonComponents";

const baseButton: Component = {
	className: "jl-button",
	base: {
		display: layout.display.classes["flex"],
		alignItems: flexboxGrid.alignItems.classes["items-center"],
		color: colors.baseTextColors.classes["text-white"],
		paddingTop: spacing.paddingTop.classes["pt-4"],
		paddingBottom: spacing.paddingBottom.classes["pb-4"],
	},

	hover: {},
};

const simpleButtons: ComponentGroup = {
	name: "Simple Buttons",
	description: "Button components",
	components: [],
};

const baseButtons = createButtonComponents(colors.baseBackgroundColors.classes, baseButton);
const brandButtons = createButtonComponents(colors.brandsBackgroundColors.classes, baseButton);

simpleButtons.components.push(...baseButtons, ...brandButtons);
// console.log(simpleButtons);

export default simpleButtons;
