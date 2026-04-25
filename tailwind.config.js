/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FDFCF8',
        foreground: '#1C2127',
        primary: {
          DEFAULT: '#1E4746',
          hover: '#153332',
        },
        secondary: {
          DEFAULT: '#D26E4B',
        },
        muted: {
          DEFAULT: '#F3F1EA',
          foreground: '#666E75',
        },
        border: '#E2DECE',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
