/** @type {import('tailwindcss').Config} */
const prefix = require('./tailwind-prefix');

module.exports = {
  prefix,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#61DBFB',
          'primary-focus': '#06c2f4',
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#61DBFB',
          'primary-focus': '#c1f1fd',
        },
      },
    ],
  },
};
