/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#ca3b3b",
      },
      rotate: {
        270: "270deg",
      },
    },
  },
  plugins: [],
};
