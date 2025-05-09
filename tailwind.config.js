/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all your React files
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: "Jost",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        rotate: "rotate 10s linear infinite", // ⬅️ Added rotate animation
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        rotate: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
      keyframes: {
        ripple: {
          '0%': {
            transform: 'scale(0.7)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(2.5)',
            opacity: '0',
          },
        },
      },
      animation: {
        ripple: 'ripple 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
