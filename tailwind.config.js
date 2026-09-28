/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0F1B2D',
          800: '#16263D',
          700: '#22354F',
          600: '#3A4D68',
        },
        paper: '#F3F5F7',
        line: '#DDE3EA',
        muted: '#5A6778',
        spring: {
          DEFAULT: '#1E7A4F',
          dark: '#155C3B',
          soft: '#E6F2EC',
          bright: '#5FD39A',
        },
        amber: {
          DEFAULT: '#F2B544',
        },
      },
      fontFamily: {
        sans: ['"Schibsted Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        display: '-0.035em',
      },
      maxWidth: {
        page: '76rem',
      },
      keyframes: {
        'rail-grow': {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
        'rise-in': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.35' },
        },
      },
      animation: {
        'rail-grow': 'rail-grow 700ms cubic-bezier(.2,.7,.2,1) both',
        'rise-in': 'rise-in 700ms cubic-bezier(.2,.7,.2,1) both',
        'fade-in': 'fade-in 200ms ease-out both',
        pulse: 'pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
