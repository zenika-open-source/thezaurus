/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      green: {
        50: "#dcfce7",
        100: "#00E5CE",
        900: "#02EA84",
      },
      purple: {
        300: "#a188ef",
      },
      blue: {
        300: "#4ca8e7",
      },
      red: {
        900: "hwb(354 13% 7%)",
      },
    },
    extend: {
      screens: {
        "3xl": "1900px",
        "4xl": "2300px",
      },
    },
  },
  plugins: [],
};
