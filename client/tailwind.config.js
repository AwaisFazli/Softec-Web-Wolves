/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainWhite: "#ffffff",
        mainDark: "#1e273b",
        mainGreen: "#88b04b",
        hoverWhite: "#e8e9eb" 
      }
    },
  },
  plugins: [],
}

