/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        oldlondon:['OldLondon', 'serif']
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,49, 49, 0.95)",
          "0 0px 65px rgba(255, 49,49, 0.9)",
        ],
    },
  },
  plugins: [],
}
}