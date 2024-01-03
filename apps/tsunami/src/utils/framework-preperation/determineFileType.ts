import { FrameworkUrl } from "~types/framework";
import createCssFile from "~utils/framework-preperation/createCssFile";
import createJsFile from "~utils/framework-preperation/createJsFile";

const determineFileType = (file: FrameworkUrl) => {
	const { name, type } = file;

	if (type === "css") {
		createCssFile(file);
	} else if (type === "js") {
		createJsFile(file);
	} else {
		throw new Error(`The file ${name} is not a css or js file`);
	}
};

export default determineFileType;
