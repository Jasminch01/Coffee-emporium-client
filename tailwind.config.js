/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('https://i.ibb.co/kJwS2RR/15.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui : {
    darkTheme : 'light'
  }
}

