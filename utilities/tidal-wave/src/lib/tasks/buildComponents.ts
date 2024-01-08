import { ComponentGroup } from "~types/component";

import createClassList from "~lib/conversions/compileClassList";
import convertComponents from "~lib/conversions/convertComponents";
import transfromSass from "~lib/transforms/transformSass";
import transformTypescript from "~lib/transforms/transformTypescript";

const buildComponents = async (components: ComponentGroup[]) => {
	const orderedComponentGroupNames: ComponentGroup["name"][] = ["Grid", "Font Sizes", "Buttons Simple"];

	const orderedComponents = orderedComponentGroupNames.map((name) => components.find((group) => group.name === name)).filter((group) => group !== undefined) as ComponentGroup[];

	await convertComponents(components, transfromSass, "scss", "_", "yellow");
	await convertComponents(components, transformTypescript, "ts", "", "magenta");
	await createClassList(orderedComponents, "blue");
};

export default buildComponents;
