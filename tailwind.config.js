module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{html,js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: {
      'main-bg': "url('images/retro.jpg')",
    },
    extend: {
      "hover": {
        "NavBarPage": "bg-red-500"
      }
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      heading: ['Poppins', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
