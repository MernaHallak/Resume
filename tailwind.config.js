/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "poppins":["Poppins", "sans-serif"]
      },
      backgroundImage:{
        "bg-tryMe":"url('./src/assets/bg-tryMe.png')"
      }
    ,
    colors:{
        mainColor:"#0C96E2",
        gray:"#92929D"
    }
    }
  },
  plugins: [],
};
