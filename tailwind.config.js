/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          softGreen: '#A3C9A8',
          warmBeige: '#F5E9DA',
          mutedBrown: '#8C6A5A',
          goldenYellow: '#F4C95D',
          dustyRose: '#D8A7B1',
          softBlue: '#AFCBFF',
        },
      },
    },
    plugins: [],
  };