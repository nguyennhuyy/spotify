/** @type {import('tailwindcss').Config} */
module.exports = {
   mode: 'jit',
   content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      height: {
        'screen-navbar-player' : 'calc(100vh - 6rem - 6rem)'
      }
    },
  },
  plugins: [],
}
