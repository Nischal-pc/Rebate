/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fall: "fall 5s linear infinite",
      },
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
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-100%)', opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}