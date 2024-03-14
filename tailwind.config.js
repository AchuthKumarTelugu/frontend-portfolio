/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      
      'lg': {'max': '1023px'},


      'sm': {'max': '1000px'},
    },
    extend: {
      colors:{
        "primary":'#081932',
        "secondary":"#FF7B0F",
        "tertiary":"#54D6BB"
      }
    },
  },
  plugins: [],
}

