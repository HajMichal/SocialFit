/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./apps/client/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#F9F9F9",
      white: "#fff",
      grey: "#AAADB0",
      brand: "#02CF8A",
      dark: "#212121",
      error: "#FF3333"
    },
    fontFamily: {
      montserrat: ["Montserrat"],
      raleway: ["Raleway"],
    },
    extend: {},
  },
  plugins: [],
}

