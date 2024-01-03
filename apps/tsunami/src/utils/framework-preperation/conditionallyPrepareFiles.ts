import { Framework } from "~types/framework";
import prepareFiles from "~utils/framework-preperation/prepareFiles";

const conditionallyPrepareFiles = (condition: boolean, files: Framework) => {
	if (condition) prepareFiles(files);
	else {
		prepareFiles(files);
	}
};

export default conditionallyPrepareFiles;
