/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			translate: {
				18: "4.3rem",
			},
			gridTemplateColumns: {
				"toolbar-sm": "auto 1fr auto",
			},
			width: {
				100: "30rem",
			},
		},
	},
	plugins: [],
};
