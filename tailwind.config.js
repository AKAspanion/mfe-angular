/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'an-',
  content: ['./shell/src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    darkTheme: 'light',
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#a6120d',
          'primary-focus': '#4b0806',
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#a6120d',
          'primary-focus': '#ee2d27',
        },
      },
    ],
  },
};
