/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#f5851f',
          light: '#f89c47',
          dark: '#d76d0f',
        },
        graybg: {
          light: '#f9fafb',
          DEFAULT: '#f3f4f6',
          dark: '#e5e7eb',
        },
      },
    },
  },
  plugins: [],
};
