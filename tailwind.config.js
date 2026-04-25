/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#27272A',
        foreground: '#F4F4F5',
        primary: {
          DEFAULT: '#1E4746',
          hover: '#2A6B68',
        },
        secondary: {
          DEFAULT: '#D26E4B',
        },
        muted: {
          DEFAULT: '#18181B',
          foreground: '#A1A1AA',
        },
        border: '#3F3F46',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
