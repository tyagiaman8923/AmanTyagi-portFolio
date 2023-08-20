/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scale:{
        '500':'5.00',
      }
    },
    fontFamily: {
      signature :["Great Vibes"],
    }
  },
  plugins: [],
}

