import { Framework } from "~types/framework";

export const reef: Framework = {
	name: "reef",
	category: "reef",
	urls: [
		{
			name: "reef",
			type: "css",
			url: "https://theautohost.com/sandbox/tsunami/reef/dist/css/reef.css",
		},
		{
			name: "reef",
			type: "js",
			url: "https://theautohost.com/sandbox/tsunami/reef/dist/js/reef.js",
		},
	],
};

export const jelly: Framework = {
	name: "jelly",
	category: "ui",
	urls: [
		{
			name: "components",
			type: "css",
			url: "https://theautohost.com/sandbox/tsunami/jelly/dist/css/jelly-components.css",
		},
		{
			name: "utilities",
			type: "css",
			url: "https://theautohost.com/sandbox/tsunami/jelly/dist/css/jelly-utilities.css",
		},
	],
};

export const jellyComponents: Framework = {
	name: "jelly",
	category: "components",
	urls: [
		{
			name: "button",
			type: "css",
			url: "https://theautohost.com/sandbox/tsunami/jelly/dist/css/button.css",
		},
		{
			name: "form",
			type: "css",
			url: "https://theautohost.com/sandbox/tsunami/jelly/dist/css/form.css",
		},
	],
};

export const jellyPages: Framework = {
	name: "jelly",
	category: "pages",
	urls: [
		{
			name: "vehicle",
			type: "css",
			url: "https://theautohost.com/sandbox/tsunami/jelly/dist/css/vehicle.css",
		},
	],
};
