const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const replace = require('postcss-replace');
const prefix = require('./tailwind-prefix');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    autoprefixer,
    replace({
      pattern: /(--|\*, ::before, ::after)/g,
      data: {
        '--': `--${prefix}`,
        '*, ::before, ::after': ':root',
      },
    }),
  ],
};
