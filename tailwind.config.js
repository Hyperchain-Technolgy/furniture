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
        background: "#EEEFFB",
        foreground: "#151875",

        violet: "#7E33E0",
        pink: "#FB2E86",
        lightpink: "#fb509a"
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    // require('flowbite/plugin')({
    //   charts: true,
    // }),
  ],
}

