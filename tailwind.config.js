/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       EB_Garamond: "'EB Garamond', serif"
      }
    },
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui")],
}

