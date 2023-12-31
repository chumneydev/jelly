// Import Button component styles from @jelly/tidal
import layout from "@jelly/tidal/dist/guides/ts/layout";
import flexboxGrid from "@jelly/tidal/dist/guides/ts/flexbox-grid";

import { Component, ComponentGroup } from "~types/component";
import createComponents from "~lib/utils/createComponents";

const gridBase: Component = {
	className: "jl-grid",
	base: {
		display: layout.display.classes["grid"],
		gap: flexboxGrid.gap.classes["gap-4"],
	},
};

// const gridClasses = Object.keys(flexboxGrid.gridTemplateColumns.classes).map((grid) => {
// 	const gridName = grid.replace("grid-cols-", "");

// 	return {
// 		className: `jl-grid-${gridName}`,
// 		base: {
// 			...gridBase.base,
// 			gridTemplateColumns: flexboxGrid.gridTemplateColumns.classes[grid as keyof typeof flexboxGrid.gridTemplateColumns.classes],
// 		},
// 	};
// });

const gridComponents: ComponentGroup = {
	name: "Grid",
	description: "Grid components",
	components: createComponents(
		flexboxGrid.gridTemplateColumns.classes,
		gridBase,
		"jl-grid-",
		(classKey) => classKey.replace("grid-cols-", ""),
		(_, originalClassName) => ({
			base: { gridTemplateColumns: flexboxGrid.gridTemplateColumns.classes[originalClassName as keyof typeof flexboxGrid.gridTemplateColumns.classes] },
		}),
	),
};

// gridComponents.components.push(...gridClasses);

export default gridComponents;
