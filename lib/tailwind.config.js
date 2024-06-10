module.exports = {
  purge: {
    content: [
      './src/**/*.{js,jsx,ts,tsx}', 
      './public/index.html',
      './pages/**/*.{js,jsx,ts,tsx}', 
      './components/**/*.{js,jsx,ts,tsx}',
      './@zabui/comps/**/*.{js,jsx,ts,tsx}'
    ],
    options: {
      safelist: [
        'hover:scale-110',
        'transform',
        'transition-all',
        'duration-200',
        'ease-in-out',
        'relative',
        'animate-pulse',
      ],
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
}