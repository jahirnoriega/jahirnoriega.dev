/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html, jsx, js, ts, tsx}",
    "./src/**/*.{html,jsx,js}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},

    colors: {
      white: "#ced4da",
      whiter: "#f8f9fa",
      blue: "#2d00f7",
      midnight: "#0a0b14",
      orange: "#2d00f7",
      black: "#020204",
      hover: "#1b263b",
    },
    fontFamily: {
      rubik: ["'Rubik', sans-serif"],
    },
  },
  plugins: ["flowbite/plugin"],
};
