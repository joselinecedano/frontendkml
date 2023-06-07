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
          "0 0px 20px rgba(255,105, 180, 0.55)",
          "0 0px 65px rgba(255, 105,180, 0.3)",
        ],
    },
  },
  plugins: [],
}
}