import { IssueKey } from "~types/issues";

const checkContainer = (element: HTMLElement | null) => element === null;

const checkPageType = () => {
	const pageTypeElement = document.querySelector("[data-jelly-page]");
	if (pageTypeElement) {
		const pageType = pageTypeElement.getAttribute("data-jelly-page");
		if (pageType && !(pageType in AllowedPageTypes)) {
			return true;
		}
	}
	return false;
};

const checkComponentType = () => {
	const componentTypeElement = document.querySelector("[data-jelly-components]");
	if (componentTypeElement) {
		const componentTypes = componentTypeElement.getAttribute("data-jelly-components");
		if (componentTypes) {
			const types = componentTypes.split(" ");
			const invalidTypes = types.filter((type) => !(type in AllowedComponentTypes));
			return invalidTypes.length > 0;
		}
	}
	return false;
};

const AllowedPageTypes = {
	content: "content",
	vehicle: "vehicle",
};

const AllowedComponentTypes = {
	buttons: "buttons",
	form: "form",
};

const formatAllowedTypes = (types: Record<string, string>) => {
	return Object.values(types).join(", ");
};

const issueSolutions = {
	container: {
		message: "Add the correct div, #wndsck, for the main content.",
		types: "",
	},
	page: {
		message: "Add the correct page type. Please use one of the following:",
		types: formatAllowedTypes(AllowedPageTypes),
	},
	componentType: {
		message: "Add the correct component type. Please use one of the following:",
		types: formatAllowedTypes(AllowedComponentTypes),
	},
};

const formattedIssueSolution = (issue: IssueKey) => {
	const solution = issueSolutions[issue];
	return `${solution.message} ${solution.types}`;
};

export interface IssueToCheckFor {
	check: (element: HTMLElement | null) => boolean;
	trackingScope: string;
	warning: string;
	solution: string;
}

const issuesToCheckFor: IssueToCheckFor[] = [
	{
		check: checkContainer,
		trackingScope: "container",
		warning: "The page is missing the correct div with id 'jelly'.",
		solution: formattedIssueSolution("container"),
	},
	{
		check: checkPageType,
		trackingScope: "page",
		warning: "This page has an invalid page type.",
		solution: formattedIssueSolution("page"),
	},
	{
		check: checkComponentType,
		trackingScope: "componentType",
		warning: "This page has an invalid page type.",
		solution: formattedIssueSolution("componentType"),
	},
];

export default issuesToCheckFor;
