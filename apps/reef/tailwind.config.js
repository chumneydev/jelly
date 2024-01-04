/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			width: {
				100: "30rem",
			},
			transitionProperty: {
				height: "height",
				"max-h": "max-height",
			},
		},
	},
	plugins: [],
};
