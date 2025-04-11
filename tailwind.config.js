/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "loader-rotation": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "loader-scale": {
          "0%, 100%": { transform: "scale(0)" },
          "50%": { transform: "scale(1)" },
        },
      },
      animation: {
        "loader-rotation": "loader-rotation 1s linear infinite",
        "loader-scale": "loader-scale 1s infinite ease-in-out",
        "loader-scale-delayed": "loader-scale 1s infinite ease-in-out 0.5s",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
