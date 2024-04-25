/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#121212',
        deepOcean: '#244855',
        sundrift: '#fbe9d0',
        sunsetRed: '#e64833'
      }
    },
  },
  plugins: [],
}