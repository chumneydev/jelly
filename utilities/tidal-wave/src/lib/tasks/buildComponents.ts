import { ComponentGroup } from "~types/component";

import convertComponents from "~lib/conversions/convertComponents";
import transfromSass from "~lib/transforms/transformSass";
import transformTypescript from "~lib/transforms/transformTypescript";
import compileFullList from "~lib/conversions/compileFullList";
import compileClassList from "~lib/conversions/compileClassList";

const buildComponents = async (components: ComponentGroup[]) => {
	const orderedComponentGroupNames: ComponentGroup["name"][] = ["Grid", "Font Sizes", "Buttons Simple", "Forms"];

	const orderedComponents = orderedComponentGroupNames.map((name) => components.find((group) => group.name === name)).filter((group) => group !== undefined) as ComponentGroup[];

	await convertComponents(components, transfromSass, "scss", "_", "yellow");
	await convertComponents(components, transformTypescript, "ts", "", "magenta");
	await compileFullList(orderedComponents, "blue");
	await compileClassList(orderedComponents, "red");
};

export default buildComponents;
