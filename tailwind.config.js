/** @type {import('tailwindcss').Config} */

const prefix = require('./tailwind-prefix');
const daisyui = require('daisyui');

const customeColors = {
  primary: '#a6120d',
  'primary-focus': '#840703',
  angular: '#a6120d',
  react: '#61DBFB',
  vue: '#42b883',
};

module.exports = {
  darkMode: 'class',
  prefix,
  content: ['./shell/src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: customeColors,
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          ...customeColors,
        },
      },
    ],
    darkTheme: '',
  },
  corePlugins: {
    // due to https://github.com/tailwindlabs/tailwindcss/issues/6602 - buttons disappear
    preflight: false,
  },
};
