/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/bg.jpj')",
      },
      fontFamily: {
        gallient: ['"c-gallient"', 'sans-serif'], // Custom Gallient font
        manrope: ['"c-manrope"', 'sans-serif'],   // Custom Manrope font
        funnel: ["c-funnel-sans", 'sans-serif']
      }
    },
  },
  plugins: [],
}