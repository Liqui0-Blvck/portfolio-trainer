/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        "sm": "310px"
      },
      spacing: {
        "big": "46rem",
        "medium": "44rem",

      }
    },
    fontFamily:{
      nunito: ['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}
