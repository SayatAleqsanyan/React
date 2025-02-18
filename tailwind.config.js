// const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      // colors: {
      //   primary: colors.blue,
      //   secondary: colors.gray,
      // }
    },
  },
  plugins: [],
  darkMode: "selector",
};
