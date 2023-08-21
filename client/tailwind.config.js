/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        timberWolf: "#D3D1D2",
        dimBlack: "#160E02",
        bitBrown: "#F39C47",
        carrot: "#F29413",
        seaSalt: "#F8F8F8"
      }
    },
  },
  plugins: [],
}

