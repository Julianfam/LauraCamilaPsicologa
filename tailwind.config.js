const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('@tailwindcss/forms')],
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        colors: {
          sky: colors.sky, // New name
          stone: colors.stone, // New name
          neutral: colors.neutral, // New name
          gray: colors.gray, // New name
          slate: colors.slate, // New name
        },
      },
    },
  },
};
