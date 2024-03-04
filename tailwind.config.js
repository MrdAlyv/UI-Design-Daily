/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'dark-blue': '#393d76 ',
      'blue': 'rgba(32, 28, 205, 1)',
      'gray': "#AFAFB4"
    },
  },
  plugins: [],
}
