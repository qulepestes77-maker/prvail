/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './context/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,ts,jsx,tsx,css}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0D1B2A', // A deep, dark blue
        'brand-med': '#1B263B',  // A medium-dark blue
        'brand-light': '#415A77',// A lighter, muted blue
        'brand-accent': '#E07A5F',// A sharp, contrasting accent (e.g., orange/coral)
        'brand-text': '#E0E1DD', // Off-white for text
        'brand-gray': '#778DA9', // A slate gray for secondary text/borders
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
