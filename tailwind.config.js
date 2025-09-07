/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F4C81',
          light: '#2D6BA6',
          dark: '#0A3154'
        },
        accent: {
          start: '#00C2FF',
          end: '#4A8FFF'
        },
        secondary: '#2D3748',
        teal: '#00B08B',
        background: {
          light: '#F7FAFC',
          DEFAULT: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
        heading: ['Rubik', 'sans-serif'],
        serif: ['Rubik', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-up': 'scaleUp 0.3s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
}
