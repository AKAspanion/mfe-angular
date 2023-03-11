/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'vu-',
  content: ['./src/**/*.{vue,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#42b883',
          'primary-focus': '#287050',
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#42b883',
          'primary-focus': '#88d4b2',
        },
      },
    ],
  },
};
