// import { Guide } from "~types/guide";

// const transformTypescript = (guide: Guide) => {
// 	const guideString = guide.variants
// 		.map((variant) => {
// 			const classStrings = variant.classes
// 				.map((cls) => {
// 					return `\t\t\t"${cls.name}": "${cls.value}"`;
// 				})
// 				.join(",\n");
// 			const properties = variant.properties.map((prop) => `"${prop}"`).join(", ");
// 			return `\t"${variant.prefix}": {\n\t\tproperty: [${properties}],\n\t\tclasses: {\n${classStrings}\n\t\t}\n\t}`;
// 		})
// 		.join(",\n");

// 	// Generate interfaces
// 	const interfaces = guide.variants
// 		.map((variant) => {
// 			const classKeys = variant.classes.map((cls) => `"${cls.name}": string`).join(", ");
// 			return `interface ${variant.prefix.charAt(0).toUpperCase() + variant.prefix.slice(1)}Classes { ${classKeys}; }\ninterface ${
// 				variant.prefix.charAt(0).toUpperCase() + variant.prefix.slice(1)
// 			} { property: string[]; classes: ${variant.prefix.charAt(0).toUpperCase() + variant.prefix.slice(1)}Classes; }`;
// 		})
// 		.join("\n");

// 	// Convert guide name to camelCase
// 	const camelCaseGuideName = guide.name.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
// 		if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
// 		return index === 0 ? match.toLowerCase() : match.toUpperCase();
// 	});

// 	// Generate Sizing interface
// 	const sizingInterfaceKeys = guide.variants.map((variant) => `${variant.prefix}: ${variant.prefix.charAt(0).toUpperCase() + variant.prefix.slice(1)};`).join(" ");
// 	const sizingInterface = `interface ${camelCaseGuideName.charAt(0).toUpperCase() + camelCaseGuideName.slice(1)} { ${sizingInterfaceKeys} }`;

// 	return `${interfaces}\n${sizingInterface}\nconst ${camelCaseGuideName}: ${
// 		camelCaseGuideName.charAt(0).toUpperCase() + camelCaseGuideName.slice(1)
// 	} = {\n${guideString}\n};\n export default ${camelCaseGuideName};`;
// };

// export default transformTypescript;

// !! V2
// import { Guide } from "~types/guide";

// const transformTypescript = (guide: Guide) => {
// 	const guideString = guide.variants
// 		.map((variant) => {
// 			const classStrings = variant.classes
// 				.map((cls) => {
// 					return `\t\t\t"${cls.name}": "${cls.value}"`;
// 				})
// 				.join(",\n");
// 			const properties = variant.properties.map((prop) => `"${prop}"`).join(", ");
// 			return `\t"${variant.prefix}": {\n\t\tproperty: [${properties}],\n\t\tclasses: {\n${classStrings}\n\t\t}\n\t}`;
// 		})
// 		.join(",\n");

// 	// Generate interfaces
// 	const interfaces = guide.variants
// 		.map((variant) => {
// 			const classKeys = variant.classes.map((cls) => `"${cls.name}"`).join(" | ");
// 			return `type ${variant.prefix.charAt(0).toUpperCase() + variant.prefix.slice(1)}Classes = ${classKeys};\ninterface ${
// 				variant.prefix.charAt(0).toUpperCase() + variant.prefix.slice(1)
// 			} { property: string[]; classes: Record<${variant.prefix.charAt(0).toUpperCase() + variant.prefix.slice(1)}Classes, string>; }`;
// 		})
// 		.join("\n");

// 	// Convert guide name to camelCase
// 	const camelCaseGuideName = guide.name.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
// 		if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
// 		return index === 0 ? match.toLowerCase() : match.toUpperCase();
// 	});

// 	// Generate Sizing interface
// 	const sizingInterfaceKeys = guide.variants.map((variant) => `${variant.prefix}: ${variant.prefix.charAt(0).toUpperCase() + variant.prefix.slice(1)};`).join(" ");
// 	const sizingInterface = `interface ${camelCaseGuideName.charAt(0).toUpperCase() + camelCaseGuideName.slice(1)} { ${sizingInterfaceKeys} }`;

// 	return `${interfaces}\n${sizingInterface}\nconst ${camelCaseGuideName}: ${
// 		camelCaseGuideName.charAt(0).toUpperCase() + camelCaseGuideName.slice(1)
// 	} = {\n${guideString}\n};\n export default ${camelCaseGuideName};`;
// };

// export default transformTypescript;

// !! V3
// import { Guide } from "~types/guide";

// const transformTypescript = (guide: Guide) => {
// 	const guideString = guide.variants
// 		.map((variant) => {
// 			const classStrings = variant.classes
// 				.map((cls) => {
// 					return `\t\t\t"${cls.name}": "${cls.value}"`;
// 				})
// 				.join(",\n");
// 			const properties = variant.properties.map((prop) => `"${prop}"`).join(", ");
// 			return `\t"${variant.prefix}": {\n\t\tproperty: [${properties}],\n\t\tclasses: {\n${classStrings}\n\t\t}\n\t}`;
// 		})
// 		.join(",\n");

// 	// Generate interfaces
// 	const interfaces = guide.variants
// 		.map((variant) => {
// 			const classKeys = variant.classes.map((cls) => `"${cls.name}"`).join(" | ");
// 			return `type ${variant.prefix.charAt(0).toUpperCase() + variant.prefix.slice(1)}Classes = ${classKeys};\ninterface ${
// 				variant.prefix.charAt(0).toUpperCase() + variant.prefix.slice(1)
// 			} { property: string[]; classes: Record<${variant.prefix.charAt(0).toUpperCase() + variant.prefix.slice(1)}Classes, string>; }`;
// 		})
// 		.join("\n");

// 	// Convert guide name to camelCase
// 	const camelCaseGuideName = guide.name.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
// 		if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
// 		return index === 0 ? match.toLowerCase() : match.toUpperCase();
// 	});

// 	// Generate Sizing interface
// 	const sizingInterfaceKeys = guide.variants.map((variant) => `${variant.prefix}: ${variant.prefix.charAt(0).toUpperCase() + variant.prefix.slice(1)};`).join(" ");
// 	const sizingInterface = `interface ${camelCaseGuideName.charAt(0).toUpperCase() + camelCaseGuideName.slice(1)} { ${sizingInterfaceKeys} }`;

// 	return `${interfaces}\n${sizingInterface}\nconst ${camelCaseGuideName}: ${
// 		camelCaseGuideName.charAt(0).toUpperCase() + camelCaseGuideName.slice(1)
// 	} = {\n${guideString}\n};\n export default ${camelCaseGuideName};`;
// };

// export default transformTypescript;

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

	// Generate interfaces
	const interfaces = guide.variants
		.map((variant) => {
			const classKeys = variant.classes.map((cls) => `"${cls.name}"`).join(" | ");
			return `type ${variant.prefix.charAt(0).toUpperCase() + variant.prefix.slice(1)}ClassesKeys = ${classKeys};\ntype ${
				variant.prefix.charAt(0).toUpperCase() + variant.prefix.slice(1)
			}Classes = { [K in ${variant.prefix.charAt(0).toUpperCase() + variant.prefix.slice(1)}ClassesKeys]: string; };\ninterface ${
				variant.prefix.charAt(0).toUpperCase() + variant.prefix.slice(1)
			} { property: string[]; classes: ${variant.prefix.charAt(0).toUpperCase() + variant.prefix.slice(1)}Classes; }`;
		})
		.join("\n");

	// Convert guide name to camelCase
	const camelCaseGuideName = guide.name.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
		if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
		return index === 0 ? match.toLowerCase() : match.toUpperCase();
	});

	// Generate Sizing interface
	const sizingInterfaceKeys = guide.variants.map((variant) => `${variant.prefix}: ${variant.prefix.charAt(0).toUpperCase() + variant.prefix.slice(1)};`).join(" ");
	const sizingInterface = `interface ${camelCaseGuideName.charAt(0).toUpperCase() + camelCaseGuideName.slice(1)} { ${sizingInterfaceKeys} }`;

	return `${interfaces}\n${sizingInterface}\nconst ${camelCaseGuideName}: ${
		camelCaseGuideName.charAt(0).toUpperCase() + camelCaseGuideName.slice(1)
	} = {\n${guideString}\n};\n export default ${camelCaseGuideName};`;
};

export default transformTypescript;
