/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: "#00ffcc",
        dark: "#0a0a0a",
        light: "#f8f9fa",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 20px rgba(0,255,204,0.45)",
      },
    },
  },
  plugins: [],
};
