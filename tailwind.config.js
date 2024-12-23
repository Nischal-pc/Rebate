/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', 'Arial', 'sans-serif'],
        heading: ['Source Sans Pro', 'Arial', 'sans-serif'],
      },
      fontSize: {
        base: '1rem',  // Default body font size (16px)
        lg: '1.125rem', // Larger text for subheadings
        xl: '1.25rem', // Headings and important text
        '2xl': '1.5rem', // Larger headings
      },
    },
  },
  plugins: [],
}