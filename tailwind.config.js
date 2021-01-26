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
      transparent: 'transparent',
    },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'bg-pattern': 'url(../icons/bg-pattern.svg)',
      },
      width: {
        'logo-desktop': '9.875rem',
        'logo-mobile': '6.25rem',
        button: '6.25rem',
      },
      maxWidth: {
        content: '27.8125rem',
      },
      fontSize: {
        heading: ['4rem', 1],
        'heading-mobile': ['2.5rem', 1.05],
        extrasmall: ['.8125rem', 2.46],
      },
      letterSpacing: {
        heading: '.27em',
      },
      lineHeight: {
        heading: '1.1',
        'text-mobile': '1.57',
      },
      padding: {
        23: '5.75rem',
        container: '10.3125rem',
      },
      gridTemplateColumns: {
        desktop: '1fr auto',
      },
      boxShadow: {
        DEFAULT: '0px 15px 20px rgba(198, 110, 110, 0.247569)',
      },
      gradientColorStops: {
        'start-hover': 'rgba(238, 139, 139, .5)',
        'end-hover': 'rgba(248, 91, 91, .5)',
      },
    },
  },
  variants: {
    extend: {
      gradientColorStops: ['focus-visible'],
    },
  },
}
