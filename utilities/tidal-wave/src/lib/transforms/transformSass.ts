import { ComponentGroup } from "~types/component";

import camelToKebab from "~lib/utils/camelToKebab";

const transfromSass = (group: ComponentGroup) => {
	let sassMap = `$${group.name}: (\n`;

	group.components.forEach((component) => {
		sassMap += `\t${component.className}: (\n`;
		sassMap += `\t\tbase: (\n`;
		Object.entries(component.base).forEach(([key, value]) => {
			sassMap += `\t\t\t${camelToKebab(key)}: ${value},\n`;
		});
		sassMap += `\t\t),\n`;
		if (component.hover) {
			sassMap += `\t\thover: (\n`;
			Object.entries(component.hover).forEach(([key, value]) => {
				sassMap += `\t\t\t${camelToKebab(key)}: ${value},\n`;
			});
			sassMap += `\t\t),\n`;
		}
		sassMap += `\t),\n`;
	});

	sassMap += ");\n";

	return sassMap;
};

export default transfromSass;
