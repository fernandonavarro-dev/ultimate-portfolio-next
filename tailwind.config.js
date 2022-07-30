/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1f1f38',
        backgroundB: '#2c2c6c',
        primary: '#4db5ff',
        secondary: 'rgba(77, 181, 255, 0.4)',
        light: 'rgba(255, 255, 255, 0.6)',
      },
    },
  },
  plugins: [],
};
