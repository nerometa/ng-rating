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
        "fm-dark-blue": "hsl(213, 19%, 22%)",
        "fm-very-dark-blue": "hsl(216, 12%, 8%)",
        "fm-light-grey": "hsl(217, 12%, 63%)",
        "fm-medium-grey": "hsl(216, 12%, 54%)",
        "fm-primary": "hsl(25, 97%, 53%)",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(135.06% 100% at 50.12% 0%, #29323D 0%, #1B2127 100%);",
      },
      transitionProperty: {
        "all-sine": "100ms cubic-bezier(0.45, 0.05, 0.55, 0.95)",
      },
    },
  },
  plugins: [],
};
