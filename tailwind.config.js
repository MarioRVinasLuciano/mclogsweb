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
        DarkBlue: '#003366'
      },
      fontFamily: {
          quicksand: ["Quicksand", "sans-serif"],
          pirulen: ['Pirulen', 'sans-serif'],
      },
    },
  },
  plugins: [],
}