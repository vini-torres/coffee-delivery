/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        default: 'Roboto, sans-serif',
      },
      colors: {
        gray: {
          100: '#E1E1E6',
          200: '#F3F2F2',
          300: '#EDEDED',
          400: '#E6E5E5',
          500: '#D7D5D5',
          600: '#8D8686',
          700: '#574F4D',
          800: '#403937',
          900: '#121214',
        },
        yellow: {
          primary: '#DBAC2C',
          secondary: '#C47F17',
        },
        purple: {
          primary: '#8047F8',
          secondary: '#4B2995',
        },
      },
      screens: {
        xsm: '400px',
      },
    },
  },
  plugins: [],
}
