/** @type {import('tailwindcss').Config} */

const prefix = require('./tailwind-prefix');

module.exports = {
  darkMode: 'class',
  prefix,
  content: ['./shell/src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#a6120d',
        angular: '#a6120d',
        react: '#61DBFB',
        vue: '#42b883',
      },
    },
  },
  plugins: [],
};
