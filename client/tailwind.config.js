import plugin from 'tailwindcss/plugin';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#FBFBFD',
          100: '#F5F6FB',
          200: '#DFE2EE',
          300: '#BDC2D4',
          400: '#91949F',
          500: '#676C7E',
          600: '#474D62',
          700: '#363A48',
          800: '#272930',
          900: '#1A1B20'
        },
        magnum: {
          50: '#fff9ed',
          100: '#fef2d6',
          200: '#fce0ac',
          300: '#f9c978',
          400: '#f7b155',
          500: '#f38d1c',
          600: '#e47312',
          700: '#bd5711',
          800: '#964516',
          900: '#793a15',
          950: '#411c09'
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol'
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'SF Mono',
          'Menlo',
          'Consolas',
          'Liberation Mono',
          'monospace'
        ]
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              position: 'relative',
              borderRadius: theme('borderRadius.md')
            }
          }
        }
      })
    }
  },
  plugins: [
    plugin(function({ addVariant, matchUtilities, theme }) {
      addVariant('hocus', ['&:hover', '&:focus']);
      matchUtilities(
        {
          square: (value) => ({
            width: value,
            height: value
          })
        },
        { values: theme('spacing') }
      );
    })
  ]
};
