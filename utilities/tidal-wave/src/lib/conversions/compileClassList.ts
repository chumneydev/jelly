import chalk from "chalk";

import { checkIfDirectoryExists, createDirectory, createFileName, createFilePath, writeFile } from "~lib/utils/namesAndDirectoryHelper";

import { ComponentGroup } from "~types/component";

const getColor = (color: string) => {
	switch (color) {
		case "red":
			return chalk.red;
		case "green":
			return chalk.green;
		case "magenta":
			return chalk.magenta;
		case "yellow":
			return chalk.yellow;
		case "blue":
			return chalk.blue;
		default:
			return chalk.white;
	}
};

const compileClassList = (components: ComponentGroup[]) => {
	const breakpoints = ["sm", "md", "lg", "xl"];
	const currentClassList: string[] = [];

	// Add all base class names first
	for (const group of components) {
		for (const component of group.components) {
			currentClassList.push(component.className);
		}
	}

	// Then, add the breakpoint-prefixed classes for each breakpoint
	for (const breakpoint of breakpoints) {
		for (const group of components) {
			for (const component of group.components) {
				currentClassList.push(`${breakpoint}:${component.className}`);
			}
		}
	}

	return currentClassList;
};

const writeClassListToFile = async (classList: string[]) => {
	const exportName = "jellyComponents";

	const fileName = createFileName(exportName, "ts", false, "");
	const filePath = createFilePath("classes", "");

	const classListString = `const ${exportName} = [\n${classList.map((className) => `  "${className}",`).join("\n")}\n];\n export default ${exportName};`;

	if (!(await checkIfDirectoryExists(filePath))) {
		await createDirectory(filePath);
	}

	writeFile(filePath, fileName, classListString);
};

const createClassList = async (components: ComponentGroup[], color: string) => {
	console.log(getColor(color)(`Creating class list...`));

	const classList = compileClassList(components);

	await writeClassListToFile(classList);

	console.log(getColor(color)(`Finished creating class list!`));
};

export default createClassList;
