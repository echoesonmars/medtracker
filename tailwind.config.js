/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0F2854',
        'blue': '#4785BF',
        'light-blue': '#BDE8F5',
        'black': '#000000',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}

