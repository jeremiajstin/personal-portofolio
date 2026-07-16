/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        accent: "#FFFFFF",
        lightGrey: "#E5E5E5",
        midGrey: "#888888",
        darkGrey: "#1A1A1A",
        darkBg: "#000000",
      },
      boxShadow: {
        "neon": "0 0 10px rgba(255, 255, 255, 0.15), 0 0 25px rgba(255, 255, 255, 0.08)",
        "neon-strong": "0 0 15px rgba(255, 255, 255, 0.35), 0 0 35px rgba(255, 255, 255, 0.15)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.9)",
      },
      backgroundImage: {
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)",
        "grey-glow-gradient": "radial-gradient(circle, rgba(255, 255, 255, 0.07) 0%, rgba(0, 0, 0, 0) 70%)",
      }
    },
  },
  plugins: [],
}
