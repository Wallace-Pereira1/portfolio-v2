/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#050a15',
          800: '#0a1224',
        },
        gold: {
          500: '#e1b12c',
        },
      },
    },
  },
  plugins: [],
}

