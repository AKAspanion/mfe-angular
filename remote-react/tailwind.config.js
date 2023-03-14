/** @type {import('tailwindcss').Config} */
const prefix = require('./tailwind-prefix');

// #61DBFB

module.exports = {
  prefix,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#61DBFB',
        'primary-focus': '#2bd5ff',
      },
    },
  },
  plugins: [],
  corePlugins: {
    // due to https://github.com/tailwindlabs/tailwindcss/issues/6602 - buttons disappear
    preflight: false,
  },
};
