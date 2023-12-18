import { Component } from "~types/component";

const createButtonComponents = (colorClasses: Record<string, string>, baseButton: Component): Component[] => {
	return Object.keys(colorClasses)
		.filter((color) => !color.includes("-") || color.includes("500"))
		.map((color) => {
			const colorName = color.replace("bg-", "");
			let hoverColor;
			if (!color.includes("-")) {
				hoverColor = color;
			} else {
				hoverColor = color.replace("500", "700");
			}

			return {
				className: `jl-button-${colorName.replace(/-\d+/, "")}`,
				base: {
					...baseButton.base,
					backgroundColor: colorClasses[color as keyof typeof colorClasses],
				},
				hover: {
					...baseButton.hover,
					backgroundColor: colorClasses[hoverColor as keyof typeof colorClasses],
				},
			};
		});
};

export default createButtonComponents;
