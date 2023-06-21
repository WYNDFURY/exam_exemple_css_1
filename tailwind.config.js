/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'primary': ['Open Sans', 'sans-serif'],
    },
    listStyleType: {
      square: 'square',
    },
    extend: {
      backgroundImage: {
        'marie': "url('../img/media/bg-landing.png')",
      },
    },
  },
  plugins: [],
}