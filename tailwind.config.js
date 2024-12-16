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
    extend: {
      animation: {
        'rotate': 'rotate 2s linear infinite',
      },
      keyframes: {
        'rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      boxShadow: {
        'focus': '0 0 0 4px rgba(2, 207, 138, 0.1)',
      },
    },
  },
  plugins: [],
}

