import chalk from "chalk";

import { checkIfDirectoryExists, createDirectory, createFileName, createFilePath, writeFile } from "~lib/utils/namesAndDirectoryHelper";

import { Guide } from "~types/guide";

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

const compileClassList = (guides: Guide[]) => {
	const breakpoints = ["sm", "md", "lg", "xl"];
	const currentClassList: string[] = [];

	for (const guide of guides) {
		const guideClassList: string[] = [];

		for (const variant of guide.variants) {
			for (const dictionaryItem of variant.classes) {
				guideClassList.push(dictionaryItem.name);
			}
		}

		// Add the classes for this guide to the main class list
		currentClassList.push(...guideClassList);

		// Then, add the breakpoint-prefixed classes for this guide
		for (const breakpoint of breakpoints) {
			for (const className of guideClassList) {
				currentClassList.push(`${breakpoint}:${className}`);
			}
		}
	}

	return currentClassList;
};

const writeClassListToFile = async (classList: string[]) => {
	const exportName = "jellyUtilities";

	const fileName = createFileName(exportName, "ts", false, "");
	const filePath = createFilePath(`classes`, "");

	const classListString = `const ${exportName} = [\n${classList.map((className) => `  "${className}",`).join("\n")}\n];\n export default ${exportName};`;

	if (!(await checkIfDirectoryExists(filePath))) {
		await createDirectory(filePath);
	}

	writeFile(filePath, fileName, classListString);
};

const createClassList = async (guides: Guide[], color: string) => {
	console.log(getColor(color)(`Creating class list...`));

	const classList = compileClassList(guides);

	await writeClassListToFile(classList);

	console.log(getColor(color)(`Finished creating class list!`));
};

export default createClassList;
