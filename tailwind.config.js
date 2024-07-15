/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B1972',
        gradientStart: '#151515',
        gradientMid1: '#151515',
        gradientMid2: '#151515',
        gradientEnd: '#151515',
      },
      keyframes: {
        animation: {
          '0%': { 'background-size': '0%' },
          '40%': { 'background-size': '100%' },
          '100%': { 'background-size': '100%' },
        },
      },
      animation: {
        animation: 'animation 2s linear infinite alternate',
      },
    },
  },
  plugins: [],
};
