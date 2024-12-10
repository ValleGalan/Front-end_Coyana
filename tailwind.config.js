/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        //MONTSERRAT - MEDIUM
        //CORMORANT GARAMOND
        sans: ['Roboto'], 
        serif: ['Roboto'],
      },
      colors: {
        //fundacion Puna
        'anaranjado-color':' #fb6253',
        'crema-claro-color':' #fbead2 ',
        'anaranjado-claro-color':'#fcb49c ',
        //coyana
        'blanco-color':'#FFFFFF',
        'marron-claro-color': '#D7c49e',//'#FFFFFF', //'#D57149',
        'negro-color':'#333333',

        'medium-orange': '#D7c49e',//'#FFFFFF', //'#D57149',

        'light-color':'#F5E6D3', //#FFF8E8
        'light-beige': '#EDCFA9',
        'light-orange': '#E89F71',
        'dark-brown': '#F5E6D3',//'#333333',
        'text-color': '#D8594C',
      },
    },
  },
  variants: {},
  plugins: [],
}

