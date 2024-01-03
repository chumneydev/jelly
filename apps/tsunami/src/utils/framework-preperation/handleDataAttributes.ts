import { Framework } from "~types/framework";
import conditionallyPrepareFiles from "~utils/framework-preperation/conditionallyPrepareFiles";

const handleDataAttributes = (currentAttribute: string, files: Framework) => {
	const currentAttributeElement = document.querySelector(`[data-${currentAttribute}]`);
	const currentAttributeValues = currentAttributeElement?.getAttribute(`data-${currentAttribute}`)?.split(" ");

	if (currentAttributeValues) {
		const currentAttributeFiles = files.urls.filter((file) => currentAttributeValues.includes(file.name));
		conditionallyPrepareFiles(true, { ...files, urls: currentAttributeFiles });
	}
};

export default handleDataAttributes;
