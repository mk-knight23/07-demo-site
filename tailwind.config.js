/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4484ce",
        secondary: "#1ad7c0",
      },
    },
  },
  plugins: [],
}
