/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#020a21", //black
        secondary: "#eec251", //light
        tertiary: "#19284c", //darker-shade
        "primary-transparent": "#020a21a2", //transparent-primary
        "secondary-transparent": "#19284ca2", //transparent-secondary
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        //"hero-pattern": "url('/src/assets/brown.png')",
      },
    },
  },
  plugins: [],
};