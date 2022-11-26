/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          dark: "#101115",
        },
        typography: {
          light: "#D3D3D4",
        },
        card: {
          dark: "#1C1F2A",
        },
        action: {
          dark: "#222326",
        },
        rated: {
          dark: "#3F4043",
        },
      },
      animation: {
        fade: "fade 0.3s ease-in",
      },
      keyframes: {
        fade: {
          "0%": { transform: "translateX(-30px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
