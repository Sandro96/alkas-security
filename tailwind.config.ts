import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#78bedb",
        secondary: "#282d3c",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
      },
      fontSize: {
        footerText: ["0.875rem", { lineHeight: "3.25rem" }], 
      },
      keyframes: {
        spinFromTop: {
          "0%": { transform: "rotate(-45deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "spin-from-top": "spinFromTop 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;