/** @type {import('tailwindcss').Config} */
const prefix = require('./tailwind-prefix');

// #61DBFB

module.exports = {
  prefix,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
