/** @type {import('tailwindcss').Config} */
const prefix = require('./tailwind-prefix');

module.exports = {
  prefix,
  content: ['./shell/src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#a6120d',
          'primary-focus': '#4b0806',
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#a6120d',
          'primary-focus': '#ee2d27',
        },
      },
    ],
  },
};
