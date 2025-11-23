/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#fff7eb',
          100: '#ffefd6',
          200: '#ffd9a8',
          300: '#feba72',
          400: '#fa923d',
          500: '#f6711e',
          600: '#e45011',
          700: '#ba3912',
          800: '#952f18',
          900: '#772818',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

