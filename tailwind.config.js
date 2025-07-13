/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'satoshi': ['Satoshi Variable', 'system-ui', 'sans-serif'],
        'graphik': ['Graphik', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          orange: '#FC6000',
          dark: '#01222C',
          gray: '#1A1A1A',
          light: '#404040',
        },
        neutral: {
          bg: '#FAFAFA',
          light: '#E2E2E2',
          medium: '#B9B9B9',
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(1, 34, 44, 0.9) 0%, rgba(252, 96, 0, 0.1) 100%)',
        'card-bg': 'rgba(255, 243, 217, 0.25)',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
