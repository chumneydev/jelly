// Import Button component styles from @jelly/tidal
import layout from "@jelly/tidal/dist/guides/ts/layout";
import flexboxGrid from "@jelly/tidal/dist/guides/ts/flexbox-grid";

import { Component } from "~types/component";

const gridBase: Component = {
	className: "jl-grid",
	base: {
		display: layout.display.classes["grid"],
		gap: flexboxGrid.gap.classes["gap-4"],
	},
};

const gridComponents: Component[] = [];

const gridClasses = Object.keys(flexboxGrid.gridTemplateColumns.classes).map((grid) => {
	const gridName = grid.replace("grid-cols-", "");

	return {
		className: `jl-grid-${gridName}`,
		base: {
			...gridBase.base,
			gridTemplateColumns: flexboxGrid.gridTemplateColumns.classes[grid as keyof typeof flexboxGrid.gridTemplateColumns.classes],
		},
	};
});

gridComponents.push(...gridClasses);

export default gridComponents;
