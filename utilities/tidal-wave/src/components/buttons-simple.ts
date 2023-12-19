// Import Button component styles from @jelly/tidal
import colors from "@jelly/tidal/dist/guides/ts/colors";
import layout from "@jelly/tidal/dist/guides/ts/layout";
import flexboxGrid from "@jelly/tidal/dist/guides/ts/flexbox-grid";
import transition from "@jelly/tidal/dist/guides/ts/transition";
import typography from "@jelly/tidal/dist/guides/ts/typography";
import spacing from "@jelly/tidal/dist/guides/ts/spacing";

import { Component, ComponentGroup } from "~types/component";
import createButtonComponents from "~lib/utils/createButtonComponents";

const baseButton: Component = {
	className: "jl-button",
	base: {
		display: layout.display.classes["flex"],
		justifyContent: flexboxGrid.justifyContent.classes["justify-center"],
		alignItems: flexboxGrid.alignItems.classes["items-center"],
		color: colors.baseTextColors.classes["text-white"],
		paddingTop: spacing.paddingTop.classes["pt-4"],
		paddingBottom: spacing.paddingBottom.classes["pb-4"],
		cursor: "pointer",
		fontWeight: typography.fontWeight.classes["font-bold"],
		transitionProperty: transition.transitionProperty.classes["transition-background"],
		transitionDuration: transition.transitionDuration.classes["duration-200"],
		transitionTimingFunction: transition.transitionTimingFunction.classes["ease-in-out"],
	},

	hover: {},
};

const simpleButtons: ComponentGroup = {
	name: "Buttons Simple",
	description: "Button components",
	components: [],
};

const baseButtons = createButtonComponents(colors.baseBackgroundColors.classes, baseButton);
const brandButtons = createButtonComponents(colors.brandsBackgroundColors.classes, baseButton);

simpleButtons.components.push(...baseButtons, ...brandButtons);
// console.log(simpleButtons);

export default simpleButtons;
