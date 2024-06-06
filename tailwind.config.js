/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mutedCoral: '#FFCCBC',
        LightSeafoamGreen: '#E0F7FA',
        SoftGrey: '#F5F5F5',
        PaleYellow: '#FFF9C4',
        DarkBlue: '#003366',
        SoftBlue: '#4A90E2',

        persiangreen: '#389483ff',
        aureolin: '#BCBB0C',
        bluemunsell: '#038EA3ff',
        blue: '#093A77ff',
        oldgold: '#A6A403ff',
        midblue: '#086098ff'
      },
      fontFamily: {
          quicksand: ["Quicksand", "sans-serif"],
          pirulen: ['Pirulen', 'sans-serif'],
      },
    },
  },
  plugins: [],
}