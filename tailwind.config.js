/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Overpass", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "dark-blue": {
          600: "hsl(213, 19%, 22%)",
          700: "hsl(213, 19%, 18%)",
          900: "hsl(216, 12%, 8%)",
        },
        "custom-neutral": {
          100: "hsl(217, 12%, 63%)",
          300: "hsl(216, 12%, 54%)",
        },
        primary: "hsl(25, 97%, 53%)",
      },
    },
  },
  plugins: [],
};
