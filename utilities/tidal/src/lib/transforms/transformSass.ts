import { Guide } from "~types/guide";

const transformSass = (guide: Guide) => {
	const guideString = guide.variants
		.map((variant) => {
			const classStrings = variant.classes
				.map((cls) => {
					const escapedName = cls.name.charAt(0).match(/[0-9]/) ? `\\${cls.name}` : cls.name;
					return `\t\t\t${escapedName.replace(".", "\\.")}: ${cls.value},`;
				})
				.join("\n");
			return `\t${variant.prefix}: (\n\t\tproperty: ${variant.properties.join(" ")},\n\t\tclasses: (\n${classStrings}\n\t\t),\n\t),`;
		})
		.join("\n");
	// Convert guide name to lowercase
	const lowerCaseGuideName = guide.name.toLowerCase();
	const dashedLowerCaseGuideName = lowerCaseGuideName.replace(/ /g, "-");
	return `$${dashedLowerCaseGuideName}: (\n${guideString}\n);`;
};

export default transformSass;
