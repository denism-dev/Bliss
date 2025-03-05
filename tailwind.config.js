// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        brandBlue: '#1e40af',
      },
      fontFamily: {
        custom: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
