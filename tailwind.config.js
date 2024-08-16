/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#E7E8D1",
        dark: "#A7BEAE",
        primaryDark: "#B85042",
      },
    },
  },
  plugins: [],
}