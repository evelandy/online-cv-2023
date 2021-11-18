module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          alert: "#dc2626",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
