/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors:{
        white:'#ffffff',
        blue:'#2a41e8',
        lightWhite:'ffffffb3',
        hover:'#0b5ed7',
        lightBlack:"#333"
      },
      borderColor:{
        primary:'hsl(0deg 0% 100% / 20%)',
        secondary:'#0d6efd'
      },
    
    },
  },
  plugins: [],
}

