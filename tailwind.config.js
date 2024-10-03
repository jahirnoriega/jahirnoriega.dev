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
      midnight: "#161515",
      orange: "#2d00f7",
      black: "#020204",
      hover: "#232323",
      darkblue: "#131928",
      light_gray: "#4b5462",
      border_color: "#a3a5a9",
      yellow: "#f8ce2d",
      orange2: "#ff7421",
      light_blue: "#0a6992",
      lighter_blue: "#76a4bd",
      bluer: "#1c53d9",
      lighter: "#139ae7",
      night: "#1c1e35",
      l_night: "#23243c",
      code: "#111827",
    },
    fontFamily: {
      rubik: ["'Rubik',sans-serif"],
      sans: ['"Inter"', "sans-serif"],
    },
  },
  plugins: ["flowbite/plugin"],
};
