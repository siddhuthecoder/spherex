/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all your React files
  ],
  theme: {
    extend: {
      fontFamily: {
        bruno: ['Caveat', 'sans-serif'],
        brunosc:['Tagesschrift','sans-serif'],
        nanum:['Nanum Myeongjo','sans-serif'] ,
        teko:['Teko','sans-serif'] // Add the new font here
      },
    },
  },
  plugins: [],
};
