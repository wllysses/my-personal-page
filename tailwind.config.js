/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'syne': 'Syne',
        'manrope': 'Manrope'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

