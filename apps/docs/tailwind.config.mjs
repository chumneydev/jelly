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
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
