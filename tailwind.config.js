/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#C68313",
          "orange-dark": "#A66D0F",
          "orange-light": "#FBF0DE",
        },
        neutral: {
          50: "#FAFAF8",
          100: "#F4F3EF",
          200: "#E8E7E2",
          300: "#CCCBC5",
          400: "#9C9B95",
          500: "#6E6D68",
          600: "#4A4A46",
          700: "#2E2E2B",
          800: "#1A1A18",
          900: "#0D0D0C",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite 1s",
        "float-slower": "float 10s ease-in-out infinite 2s",
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        orbit: "orbit 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(110px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(110px) rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
};
