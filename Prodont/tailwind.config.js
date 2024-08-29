import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        white: "#FFFFFF",
        black: "#000000",
        blue: {
          200:"#99C7FB",
          500: "#006FEE",
          
      },
      cyan:{
        400:"#A5EEFD",
      },
      purple:{
        200:"#C9A9E9",
        500:"#7828C8",
        700:"#481878",
        800:"#301050"
      },
      zinc:{
        900:"#18181B"
      }
    },
    fontFamily:{
      GrandHotel:["Grand Hotel","sans-serif"],
      FuturaBook:["Futura Book","sans-serif"]
    }
  },
},
  darkMode: "class",
  plugins: [nextui()]
}

