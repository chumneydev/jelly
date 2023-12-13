import { Guide } from "~types/guide";

const transformTypescript = (guide: Guide) => {
	const guideString = guide.variants
		.map((variant) => {
			const classStrings = variant.classes
				.map((cls) => {
					return `\t\t\t"${cls.name}": "${cls.value}"`;
				})
				.join(",\n");
			const properties = variant.properties.map((prop) => `"${prop}"`).join(", ");
			return `\t"${variant.prefix}": {\n\t\tproperty: [${properties}],\n\t\tclasses: {\n${classStrings}\n\t\t}\n\t}`;
		})
		.join(",\n");
	// Convert guide name to camelCase
	const camelCaseGuideName = guide.name.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
		if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
		return index === 0 ? match.toLowerCase() : match.toUpperCase();
	});
	return `export const ${camelCaseGuideName} = {\n${guideString}\n};`;
};

export default transformTypescript;
