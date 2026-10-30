/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF9',
          100: '#F8F4EE',
          200: '#F4EBDD', // Brand Warm Cream
          300: '#E7D8C0',
          400: '#D5BE9A',
          DEFAULT: '#F4EBDD',
        },
        charcoal: {
          DEFAULT: '#242321', // Brand Deep Charcoal
          900: '#161514',
          800: '#242321',
          700: '#353330',
          600: '#4D4A46',
          500: '#686560',
        },
        ember: {
          DEFAULT: '#B85C38', // Brand Burnt Orange
          hover: '#9E4A28',
          light: '#CE7855',
          pale: '#FBECE6',
        },
        earth: {
          DEFAULT: '#75533D', // Brand Earth Brown
          dark: '#583D2C',
          light: '#8E674D',
          pale: '#EFE7E2',
        },
        kenyanGreen: {
          DEFAULT: '#526447', // Brand Natural Green
          dark: '#3D4B35',
          light: '#6E8560',
          pale: '#EDF2EB',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 10px 30px -5px rgba(36, 35, 33, 0.08), 0 4px 6px -2px rgba(36, 35, 33, 0.04)',
        'warm-lg': '0 20px 40px -10px rgba(36, 35, 33, 0.12), 0 8px 12px -4px rgba(36, 35, 33, 0.06)',
        'ember': '0 8px 24px -4px rgba(184, 92, 56, 0.35)',
      }
    },
  },
  plugins: [],
}
