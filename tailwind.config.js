/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      textColor: (theme) => theme("colors"),
      textColor: {
        primary: "#BBBA35",
        secondary: "#ffed4a",
        danger: "#e3342f",
      },
    },
  },
  plugins: [],
};
