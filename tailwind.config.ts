/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-sm': {'max': '639px'},
        'min-sm': {'min': '640px'},
        'max-md': {'max': '767px'},
        'min-md': {'min': '768px'},
        'max-lg': {'max': '1023px'},
        'min-lg': {'min': '1024px'},
        'max-xl': {'max': '1279px'},
        'min-xl': {'min': '1280px'},
        'max-2xl': {'max': '1535px'},
        'min-2xl': {'min': '1536px'},
        'max-3xl': {'max': '1919px'},
        'min-3xl': {'min': '1920px'},
        'max-4xl': {'max': '2559px'},
        'min-4xl': {'min': '2560px'},
        'max-5xl': {'max': '3839px'},
        'min-5xl': {'min': '3840px'},
        'max-6xl': {'max': '5119px'},
        'min-6xl': {'min': '5120px'},
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'oxygen': ['Oxygen', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'gotham': ['Gotham', 'sans-serif'],
        'museo': ['Museo', 'sans-serif'],
        'gotham-ultra': ['Gotham-Ultra', 'sans-serif'],
        'bootstrap-icons': ['Bootstrap-Icons'],
        'nest': ['nest']
      },
      fontSize: {
        'ete-md': '1.3rem',
        'ete-base': '1.4rem',
        'ete-lg': '1.7rem',
        'ete-xl': '1.9rem',
        'ete-2xl': ['2.4rem', '2.4rem'],
      },
      colors: {
        'ete-blue': '#252b6a',
        'ete-light-blue': '#67b4f6',
        'ete-grey': {
          '10': '#f6f6f6',
          '50': '#e2e2e2',
          '100': '#b6b7ba',
          '300': '#57575c',
          '400': '#39393b',
          '500': '#333335',
          '600': '#303032',
        },
        'ete-yellow': {
          '50': '#fdf0d5',
          '300': '#fec95f',
          '500': '#c07600',
          '700': '#6f4400',
        },
        'ete-red': {
          '300': '#C9282E',
          '500': '#ca2730',
          '700': '#6a1517'
        },
        'error-red': '#e02b27'
      },
      borderWidth: {
        '1': '1px'
      }
    },
  },
  plugins: [],
}

