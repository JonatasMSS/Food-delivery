/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      maxHeight:{
        'vh-80':'80vh',
        'vh-90':'90vh',
      },
      colors:{
        defaultBackground:'#191A1A',
        softWhite:'#F3F4F8',
        defaultRed:'#C90707',
        softGrey:'#535353',
        defaultOrange:'#FF7A00',
        softGreen:'#61EF5E',
        extraSoftGrey:'#D0CFCF'
      },
      fontFamily:{
        'roboto-condensed':['"Roboto Condensed"','sans-serif'],
      }
    },
  },
  plugins: [],
}
