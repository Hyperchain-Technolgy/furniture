/** @type {import('tailwindcss').Config} */
export default {
  content: [], content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      colors: {
        // to change bg & fg go to index.css
        background: "#EEEEEE",
        foreground: "#393E46 ",
        text: "#393E46",
        pink: "#393E46",
        lightpink: "#EEEEEE"
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // require('flowbite/plugin')({
    //   charts: true,
    // }),
  ],
}

