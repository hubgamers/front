/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {},
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin')
  ],
}

