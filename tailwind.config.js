/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // blue-600
        },
        background: {
          DEFAULT: '#f8fafc', // soft white (tailwind slate-50)
        },
      },
    },
  },
  plugins: [],
};
