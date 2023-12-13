import fs from "fs";
import path from "path";

export const createFileName = (name: string, ext: string, includeHyphen: boolean, prefix?: string): string => {
	const hyphen = includeHyphen ? "-" : "";

	return `${prefix}${hyphen}${name}.${ext}`;
};

export const createFilePath = (type: string, format: string, category?: string): string => {
	// * Use in production. Vite disables the root directory in development
	const rootDirectory = path.join(__dirname, "../../../dist/");
	const distDirectory = path.join(rootDirectory, type, format, category ? category : "");

	// * Use in production. Vite disables the root directory in development
	return distDirectory;
	// * Used in vite only
	// return `${distDirectory}/${fileName}`;
};

export const checkIfDirectoryExists = (directoryPath: string): Promise<boolean> => {
	return fs.promises
		.access(directoryPath, fs.constants.F_OK)
		.then(() => true)
		.catch(() => false);
};

export const createDirectory = async (directoryPath: string): Promise<void> => {
	await fs.promises.mkdir(directoryPath, { recursive: true });
};

export const clearDirectory = async (directoryPath: string): Promise<void> => {
	const files = await fs.promises.readdir(directoryPath);

	await Promise.all(
		files.map(async (file) => {
			const filePath = path.join(directoryPath, file);
			await fs.promises.unlink(filePath);
		}),
	);
};

export const writeFile = async (filePath: string, fileName: string, data: string): Promise<void> => {
	const currentFile = path.join(filePath, fileName);
	await fs.promises.writeFile(currentFile, data);
};
