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
};
