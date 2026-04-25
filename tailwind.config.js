/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F2F2F7',
        foreground: '#1C1C1E',
        primary: {
          DEFAULT: '#2C2C2E',
          hover: '#1C1C1E',
        },
        secondary: {
          DEFAULT: '#8E8E93',
        },
        muted: {
          DEFAULT: '#E5E5EA',
          foreground: '#636366',
        },
        border: '#D1D1D6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
