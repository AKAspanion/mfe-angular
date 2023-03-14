/** @type {import('tailwindcss').Config} */
const prefix = require('./tailwind-prefix');

// #42b883

module.exports = {
  prefix,
  content: ['./src/**/*.{vue,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#42b883',
      },
    },
  },
  plugins: [],
  corePlugins: {
    // due to https://github.com/tailwindlabs/tailwindcss/issues/6602 - buttons disappear
    preflight: false,
  },
};
