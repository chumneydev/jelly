/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
      gridTemplateColumns: {
        "docs-sm": "auto 1fr",
        "docs-md": "auto 1fr auto",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
