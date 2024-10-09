/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx,ai}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e6e7e9",
        drkprimary: "#000605",
        secondary: "#007C66",
        neutral: "#FFA17A",
        success: "#00D600",
        error: "#FF0000",
        whyte: "#F2F2F2",
        grey: '#00000066'
      },
    },
  },
  plugins: [],
}

