const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        lightest: '#FFF4F4',
        light: '#F8BFBF',
        DEFAULT: '#CE9898',
        dark: '#EE8B8B',
      },
      neutral: {
        DEFAULT: '#423A3A',
      },
      white: '#FFF',
      error: '#F96464',
    },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'bg-pattern': 'url(../icons/bg-pattern.svg)',
      },
    },
  },
}
