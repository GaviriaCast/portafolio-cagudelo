/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#E2DFDA',
        foreground: '#1F2428',
        primary: {
          DEFAULT: '#1E4746',
          hover: '#153332',
        },
        secondary: {
          DEFAULT: '#D26E4B',
        },
        muted: {
          DEFAULT: '#D6D3CD',
          foreground: '#5A6268',
        },
        border: '#C2BDB6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
