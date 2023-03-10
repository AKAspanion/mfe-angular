/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./shell/src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
