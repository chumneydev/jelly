import convertComponents from "~lib/conversions/convertComponents";
import transfromSass from "~lib/transforms/transformSass";
import transformTypescript from "~lib/transforms/transformTypescript";
import { ComponentGroup } from "~types/component";

const buildComponents = async (components: ComponentGroup[]) => {
	await convertComponents(components, transfromSass, "scss", "_", "yellow");
	await convertComponents(components, transformTypescript, "ts", "", "magenta");
};

export default buildComponents;
