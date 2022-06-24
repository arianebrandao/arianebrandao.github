/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#FA7C91'
        },
        brown: {
          500: '#757763',
        },
        purple: {
          10: '#302f3d',
          300: '#8A4D76',
        },
        beige: {
          900: '#D0D1CD',
        },
      },
    },
    fontFamily: {
      josefin: ['Josefin Sans', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}
