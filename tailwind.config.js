const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber
    },
    extend: {
      fontFamily: {
        sahel: ['Sahel', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
