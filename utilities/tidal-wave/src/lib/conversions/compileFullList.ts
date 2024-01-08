import getColor from "~lib/utils/getColor";
import { checkIfDirectoryExists, createDirectory, createFileName, createFilePath, writeFile } from "~lib/utils/namesAndDirectoryHelper";
import { ComponentGroup } from "~types/component";

const compileClassList = (components: ComponentGroup[]) => {
	const breakpoints = ["sm", "md", "lg", "xl"];
	const classList: string[] = [];

	// Add all base class names first
	for (const group of components) {
		for (const component of group.components) {
			classList.push(component.className);
		}
	}

	// Then, add the breakpoint-prefixed classes for each breakpoint
	for (const breakpoint of breakpoints) {
		for (const group of components) {
			for (const component of group.components) {
				classList.push(`${breakpoint}:${component.className}`);
			}
		}
	}

	return classList;
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

const compileFullList = async (components: ComponentGroup[], color: string) => {
	// Need current timestamp for logging
	const date = new Date();
	const currentTimestamp = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

	console.log(getColor(color)(`${currentTimestamp} Creating full class list...`));

	const classList = compileClassList(components);

	await writeClassListToFile(classList);

	console.log(getColor(color)(`${currentTimestamp} Finished creating full class list!`));
};

export default compileFullList;
