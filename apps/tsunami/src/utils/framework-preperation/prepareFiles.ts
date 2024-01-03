import { Framework } from "~types/framework";
import determineFileType from "~utils/framework-preperation/determineFileType";

const prepareFiles = (files: Framework) => {
	return files.urls.forEach((file) => {
		determineFileType(file);
	});
};

export default prepareFiles;
