/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
          sans: ['Cadiz'],
      },
      fontSize: {
          '2xl': '1.23rem',
          '3xl': '1.65rem',
      },
      fontWeight: {
          thin: 300,
          normal: 350,
          semibold: 600,
          bold: 800,
      },
      colors: {
          primary: '#ec4899',
          secondary: "#f97316",
          orange: '#FC8D43',
          darkpink: "#FB258D",
          peach: "#ED6C71",
          hcbleu: "#022A5B",
          blue: "#081831",
          darkblue: '#011C38',
          hcblack: '#040507',
          imageblue: '#010e1e',
          grey: "#7D7B7A",
          lightgrey: "#E5E5E5",
      },
      backgroundImage: {
          'gradient-radial': 'radial-gradient(at center center, var(--tw-gradient-stops))',
      },
      boxShadow: {
          card: "10px 10px 10px #e2e8f0",
          sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          innerSection: 'inset 0px 70px 50px -70px rgba(0,0,0,0.50)',
          'innerSection-lg': 'inset 0px 70px 100px -70px rgba(0,0,0,0.90)',
          innerSectionBottom: 'inset 0px -70px 50px -50px rgba(0,0,0,0.50)',
          innerScrollShadow: 'inset 0 -100px 20px rgba(0, 0, 0, 1)',

      },
      transitionDuration: {
          '100': '100ms',
          '200': '200ms',
          '300': '300ms',
          '400': '400ms',
          '500': '500ms',
          '600': '600ms',
      },
      keyframes: {
          fadein: {
              '0%': { opacity: 0, visibility: 'visible' },
              '100%': { opacity: 1, visibility: 'visible' },
          },
          fadedownin: {
              '0%': { opacity: 0, transform: 'translate(0, -20px)', visibility: 'visible' },
              '100%': { opacity: 1, transform: 'translate(0, 0)', visibility: 'visible' },
          },
          fadedownout: {
              '0%': { opacity: 1, transform: 'translate(0, 0)', visibility: 'visible' },
              '100%': { opacity: 0, transform: 'translate(0, -20px)', visibility: 'visible' },
          },
          fadeinleft: {
              '0%': { opacity: 0, transform: 'translate(-100px, 0)', visibility: 'visible' },
              '100%': { opacity: 1, transform: 'translate(0, 0)', visibility: 'visible' },
          },
          pendulum: {
              '0%': { transform: 'rotate(10deg)'},
              '50%' : {transform: 'rotate(-5deg)'},
              '100%' : {transform: 'rotate(10deg)'}
          }
      },
      animation: {
          fadein: 'fadein .3s ease-out forwards',
          fadedownin: 'fadedownin .3s ease-out forwards',
          fadeinleft: 'fadeinleft .3s ease-out forwards',
          fadedownout: 'fadedownout .3s ease-out forwards',
          pendulum: 'pendulum 3.5s ease-in-out forwards infinite'
      },
  }
  },
  plugins: [{
    tailwindcss: {},
    autoprefixer: {},
  }]
}

