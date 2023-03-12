/** @type {import('tailwindcss').Config} */
const prefix = require('./tailwind-prefix');

// #42b883

module.exports = {
  prefix,
  content: ['./src/**/*.{vue,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
