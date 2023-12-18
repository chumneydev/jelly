import { ComponentGroup } from "~types/component";

const createInterface = (name: string, base: Record<string, string>, hover?: Record<string, string>, hoverTypes?: Record<string, string>): string => {
	let interfaceString = `\t"${name}": {\n`;
	interfaceString += `\t\tbase: {\n`;
	Object.entries(base).forEach(([key, value]) => {
		interfaceString += `\t\t\t${key}: ${typeof value};\n`;
	});
	interfaceString += `\t\t},\n`;
	if (hover) {
		interfaceString += `\t\thover: {\n`;
		Object.entries(hover).forEach(([key, value]) => {
			interfaceString += `\t\t\t${key}: ${hoverTypes ? hoverTypes[key] : typeof value};\n`;
		});
		interfaceString += `\t\t},\n`;
	}
	interfaceString += `\t},\n`;
	return interfaceString;
};

const createComponent = (name: string, base: Record<string, string>, hover?: Record<string, string>): string => {
	let componentString = `\t"${name}": {\n`;
	componentString += `\t\tbase: {\n`;
	Object.entries(base).forEach(([key, value]) => {
		componentString += `\t\t\t${key}: '${value}',\n`;
	});
	componentString += `\t\t},\n`;
	if (hover) {
		componentString += `\t\thover: {\n`;
		Object.entries(hover).forEach(([key, value]) => {
			componentString += `\t\t\t${key}: '${value}',\n`;
		});
		componentString += `\t\t},\n`;
	}
	componentString += `\t},\n`;
	return componentString;
};

const transformTypescript = (group: ComponentGroup): string => {
	let tsInterfaces = `export interface ${group.name}Components {\n`;
	let tsComponentGroup = `export const ${group.name}: ${group.name}Components = {\n`;

	group.components.forEach((component) => {
		tsInterfaces += createInterface(component.className, component.base, component.hover);
		tsComponentGroup += createComponent(component.className, component.base, component.hover);
	});

	tsInterfaces += `}\n`;
	tsComponentGroup += `};\n`;

	return tsInterfaces + tsComponentGroup;
};

export default transformTypescript;
