/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      fontFamily: {
        mabolistafont: ['regensburg']
      },
      height: {
        heroabout: '40rem'
      },
      width: {
        homebasesecond: '30rem'
      },
      colors: {
        primary: '2C2C2C',
        secondary: 'F5167E'
      }
    }
  },
  plugins: []
}
