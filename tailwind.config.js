module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          alert: "#ff4040",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
