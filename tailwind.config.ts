import type { Config } from 'tailwindcss';

const { nextui } = require('@nextui-org/react');

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './client/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  prefix: '',
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1290px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)'],
      },
      colors: {
        orange: {
          700: '#FF9900',
          800: '#B46100',
        },
        blue: {
          100: '#EBF4FF',
          200: '#CCE3FF',
          700: '#1152A2',
        },
        red: {
          100: '#D81818',
        },
        dark: {
          200: '#36394A',
          400: '#141522',
          900: '#002124',
        },
        gray: {
          100: '#f9f9f9',
          200: '#efefef',
          250: '#F5F5F5',
          270: '#9C9CA4',
          290: '#9D9DA1',
          300: '#C1C7D0',
          350: '#B0AFB7',
          370: '#E0E0E0',
          400: '#E7EAEE',
          450: '#F2F2F5',
          500: '#78778B',
          600: '#575757',
        },
        purple: {
          100: '#EDF0F7',
        },
        green: {
          100: '#99DDE4',
          300: '#319A51',
          500: '#00AABB',
          700: '#00828F',
          750: '#17474A',
          800: '#1A3739',
          850: '#012225',
          900: '#002124',
        },
        yellow: {
          50: '#FFFEF2',
          100: '#FCF6E8',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      boxShadow: {
        sm: '1px 1px 1px 0 #B46100',
        md: '0 0px 10px 0 rgba(0, 29, 64, 0.1)',
        orange: 'inset 0 -100px 0 0 #e68a00',
      },
    },
  },

  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss-animate'), nextui()],
};

export default config;
