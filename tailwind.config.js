/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/*.{js,jsx}",],
  theme: {
    extend: {
      screens:{
        mobile: '414px',
        tablet: '600px',
        laptop: '1200px'
      }
    },
  },
  plugins: [],
}

