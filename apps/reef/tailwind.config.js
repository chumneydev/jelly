/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
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
