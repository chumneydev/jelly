// Import Button component styles from @jelly/tidal
import colors from "@jelly/tidal/dist/guides/ts/colors";
import layout from "@jelly/tidal/dist/guides/ts/layout";
import flexboxGrid from "@jelly/tidal/dist/guides/ts/flexbox-grid";
import spacing from "@jelly/tidal/dist/guides/ts/spacing";

import { Component } from "~types/component";

const baseButton: Component = {
	className: "jl-button",
	base: {
		display: layout.display.classes["flex"],
		alignItems: flexboxGrid.alignItems.classes["items-center"],
		color: colors.baseTextColors.classes["text-white"],
		paddingTop: spacing.paddingTop.classes["pt-4"],
		paddingBottom: spacing.paddingBottom.classes["pb-4"],
		background: colors.baseBackgroundColors.classes["bg-blue-500"],
	},

	hover: {},
};

const buttons: Component[] = [];

const baseButtons: Component[] = Object.keys(colors.baseBackgroundColors.classes).map((color) => {
	const colorName = color.replace("bg-", "");

	let hoverColor;
	if (!color.includes("-")) {
		hoverColor = color;
	} else {
		hoverColor = color.replace("500", "700");
	}

	return {
		className: `jl-button--${colorName.replace(/-\d+/, "")}`,
		base: {
			...baseButton.base,
			backgroundColor: colors.baseBackgroundColors.classes[color as keyof typeof colors.baseBackgroundColors.classes],
		},
		hover: {
			...baseButton.hover,
			backgroundColor: colors.baseBackgroundColors.classes[hoverColor as keyof typeof colors.baseBackgroundColors.classes],
		},
	};
});

const brandButtons: Component[] = Object.keys(colors.brandsBackgroundColors.classes).map((color) => {
	const colorName = color.replace("bg-", "");

	let hoverColor;
	if (!color.includes("-")) {
		hoverColor = color;
	} else {
		hoverColor = color.replace("500", "700");
	}

	return {
		className: `jl-button--${colorName.replace(/-\d+/, "")}`,
		base: {
			...baseButton.base,
			backgroundColor: colors.brandsBackgroundColors.classes[color as keyof typeof colors.brandsBackgroundColors.classes],
		},
		hover: {
			...baseButton.hover,
			backgroundColor: colors.brandsBackgroundColors.classes[hoverColor as keyof typeof colors.brandsBackgroundColors.classes],
		},
	};
});

buttons.push(...baseButtons, ...brandButtons);

export default buttons;
