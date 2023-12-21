/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "sans-serif"],
      },
      fontWeight: {
        thin: 100,
        normal: 400,
        bold: 700,
      },
      maxWidth: {
        "8xl": "90rem",
      },
      boxShadow: {
        "neu-sm": "1px 1px 0 0px rgba(0,0,0,1)",
        "neu-md": "2px 2px 0 0px rgba(0,0,0,1)",
        "neu-lg": "4px 4px 0 0px rgba(0,0,0,1)",
      },
      gridTemplateColumns: {
        "docs-sm": "auto 1fr",
        "docs-md": "auto 1fr auto",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
