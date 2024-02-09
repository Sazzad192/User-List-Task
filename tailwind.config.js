/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-50": "#F0FDFA",
        "primary-100": "#CCFBF1",
        "primary-200": "#99F6E4",
        "primary-300": "#5EEAD4",
        "primary-400": "#2DD4BF",
        "primary-500": "#0D9488",
        "primary-600": "#0F766E",
        "primary-700": "#115E59",
        "primary-800": "#134E4A",
        "primary-900": "#042F2E",
        "primary-bg": "#CCFBF1",
        "main-bg": "#F7FDFC",
        "gray-bg": "#FDFDFD",
      },
    },
  },
  plugins: [],
}

