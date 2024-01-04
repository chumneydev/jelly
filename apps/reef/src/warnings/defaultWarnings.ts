import { Warning } from "~types/warningTypes";

const defaultWarnings: Warning[] = [
	{
		id: "no-jelly",
		check: () => !document.getElementById("jelly"),
		message: 'The user has not set a div id="jelly" in their html file',
		solution: 'Add a div with id="jelly" to your HTML file.',
	},
	{
		id: "jelly-unsupported-tag",
		check: () => {
			const jellyDiv = document.getElementById("jelly");
			if (!jellyDiv) return false;
			const unsupportedTags = ["sup", "br", "i", "b", "u", "s", "em", "strong"];
			for (const tag of unsupportedTags) {
				if (jellyDiv.querySelectorAll(tag).length > 0) return true;
			}
			return false;
		},
		message: "Unsupported HTML tags found in the jelly div",
		solution: 'Remove any "sup", "br", "i", "b", "u", "s", "em", "strong" tags from your code.',
	},
	{
		id: "jelly-content-missing",
		check: () => {
			// const jellyDiv = document.getElementById("jelly");
			// return !jellyDiv || jellyDiv.getAttribute("data-jelly-content") === null;
			const jellyContent = document.querySelector("[data-jelly-content]");
			return !jellyContent || jellyContent.getAttribute("data-jelly-content") === null;
		},
		message: "The data-jelly-content attribute is missing",
		solution: "Add the data-jelly-content attribute to your jelly div.",
	},
	{
		id: "jelly-content-empty",
		check: () => {
			const jellyDiv = document.getElementById("jelly");
			return jellyDiv ? jellyDiv.getAttribute("data-jelly-content") === "" : false;
		},
		message: "The data-jelly-content attribute is empty",
		solution: 'Set the data-jelly-content attribute to "vehicle" or "basic".',
	},
	{
		id: "jelly-content-invalid",
		check: () => {
			const jellyDiv = document.getElementById("jelly");
			const content = jellyDiv ? jellyDiv.getAttribute("data-jelly-content") : "";
			return content ? !["vehicle", "basic"].includes(content) : false;
		},
		message: "The data-jelly-content attribute is not valid",
		solution: 'Set the data-jelly-content attribute to "vehicle" or "basic".',
	},
	{
		id: "jelly-components-empty",
		check: () => {
			const jellyDiv = document.getElementById("jelly");
			const components = jellyDiv ? jellyDiv.getAttribute("data-jelly-components") : null;
			return components === "";
		},
		message: "The data-jelly-components attribute is empty",
		solution: 'Set the data-jelly-components attribute to "form", "buttons", or "accordion".',
	},
	{
		id: "jelly-components-invalid",
		check: () => {
			const jellyDiv = document.getElementById("jelly");
			const components = jellyDiv ? jellyDiv.getAttribute("data-jelly-components") : "";
			return components ? !components.split(" ").every((component) => ["form", "buttons", "accordion"].includes(component)) : false;
		},
		message: "The data-jelly-components attribute is not valid",
		solution: 'Set the data-jelly-components attribute to "form", "buttons", or "accordion".',
	},
];
export default defaultWarnings;
