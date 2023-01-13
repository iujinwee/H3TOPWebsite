module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{html,js}"],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': {'max': '768px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1023px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
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
