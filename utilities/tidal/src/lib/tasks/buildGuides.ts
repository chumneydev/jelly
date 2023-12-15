import { Guide } from "~types/guide";

import convertGuides from "~lib/conversions/convertGuides";

import transformSass from "~lib/transforms/transformSass";
import transformTypescript from "~lib/transforms/transformTypescript";
import createClassList from "~lib/conversions/compileClassList";

const buildGuides = async (guides: Guide[]) => {
	await convertGuides(guides, transformSass, "scss", "_", "blue");
	await convertGuides(guides, transformTypescript, "ts", "", "yellow");
	await createClassList(guides, "magenta");
};

export default buildGuides;
