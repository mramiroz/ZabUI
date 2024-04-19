/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: ['border-black-700', 'bg-black-400', 'border-blue-700', 'bg-blue-400', 'border-green-700', 'bg-green-400', 'border-red-700', 'bg-red-400', 'border-yellow-700', 'bg-yellow-400', 'border-purple-700', 'bg-purple-400', 'border-gray-700', 'bg-gray-400'],
    },
  },
}

