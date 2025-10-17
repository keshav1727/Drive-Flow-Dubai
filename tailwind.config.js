/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dubai-gold': '#FFD700',
        'dubai-blue': '#0066CC',
        'dubai-sand': '#F4E4BC',
        'dubai-red': '#CC0000',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
