import chalk from "chalk";
import camelCase from "~lib/utils/camelCase";
import getColor from "~lib/utils/getColor";
import getCurrentTime from "~lib/utils/getCurrentTime";

import { checkIfDirectoryExists, createDirectory, createFileName, createFilePath, writeFile } from "~lib/utils/namesAndDirectoryHelper";

import { ComponentGroup } from "~types/component";

const compileClassList = (group: ComponentGroup) => {
	const classList: string[] = [];

	for (const component of group.components) {
		classList.push(component.className);
	}

	return classList;
};

const writeClassListToFile = async (classList: string[], componentName: string) => {
	const fileName = createFileName(componentName, "ts", false, "");
	const filePath = createFilePath("classes", "");

	const classListString = `const ${componentName} = [\n${classList.map((className) => `  "${className}",`).join("\n")}\n];\n export default ${componentName};`;

	if (!(await checkIfDirectoryExists(filePath))) {
		await createDirectory(filePath);
	}

	writeFile(filePath, fileName, classListString);
};

const createClassList = async (components: ComponentGroup[], color: string) => {
	const currentTimestamp = getCurrentTime();

	for (const group of components) {
		const componentName = camelCase(group.name);

		console.log(getColor(color)(`${currentTimestamp} Creating ${componentName}...`));

		const classList = compileClassList(group);
		await writeClassListToFile(classList, componentName);
	}

	console.log(getColor(color)(`${currentTimestamp} Finished creating component class list!`));
};

export default createClassList;
