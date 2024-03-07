/** @type {import('tailwindcss').Config} */
export default {
  content: [], content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // to change bg & fg go to index.css
        background: "#EEEFFB",
        foreground: "#151875",

        violet: "#7E33E0",
        pink: "#FB2E86",
      },
    },
  },
  plugins: [],
}

