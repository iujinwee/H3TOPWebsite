module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{html,js}"],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    screen:{
      "xs":'300px'
    },
    backgroundImage: {
      'main-bg': "url('images/retro.jpg')",
    },
    extend: {
      "hover": {
        "NavBarPage": "bg-red-500"
      }
    },
    fontFamily: {
      'blackopsone': ['Black Ops One', 'sans-serif'],
      'audiowide': ['Audiowide', 'sans-serif'],
      'orbitron': ['Orbitron', 'sans-serif'],

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
