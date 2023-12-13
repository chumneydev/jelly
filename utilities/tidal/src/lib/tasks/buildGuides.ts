import { Guide } from "~types/guide";

import convertGuides from "~lib/conversions/convertGuides";

import transformSass from "~lib/transforms/transformSass";
import transformTypescript from "~lib/transforms/transformTypescript";

const buildGuides = async (guides: Guide[]) => {
	await convertGuides(guides, transformSass, "scss", "_", "blue");
	await convertGuides(guides, transformTypescript, "ts", "", "yellow");
};

export default buildGuides;
