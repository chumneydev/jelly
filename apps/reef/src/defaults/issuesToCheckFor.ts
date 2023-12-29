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
	Content: "content",
	Vehicle: "vehicle",
};

const AllowedComponentTypes = {
	Buttons: "buttons",
	Form: "form",
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
		warning: "The page is missing the correct div with id 'wndsck'.",
		solution: "Add the correct div, #wndsck, for the main content.",
	},
	{
		check: checkPageType,
		trackingScope: "page",
		warning: "This page has an invalid page type.",
		solution: `Add the correct page type. Please use one of the following: <span class="font-bold">[${Object.keys(AllowedPageTypes).join(", ")}.]</span>.`,
	},
	{
		check: checkComponentType,
		trackingScope: "componentType",
		warning: "This page has an invalid page type.",
		solution: `Add the correct page type. Please use one of the following: <span class="font-bold">[${Object.keys(AllowedComponentTypes).join(", ")}]</span>.`,
	},
];

export default issuesToCheckFor;
