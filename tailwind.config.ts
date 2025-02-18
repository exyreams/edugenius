import type { Config } from "tailwindcss";
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        figtree: ["var(--font-figtree)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dropdown-dark": "#353941",
        "dropdown-light": "#d0d3d9",
      },
      animation: {
        ripple: "ripple 2.5s infinite ease-in-out",
        "color-change": "color-change 2.5s infinite ease-in-out",
      },
      keyframes: {
        ripple: {
          "0%": {
            transform: "scale(1)",
            boxShadow:
              "rgba(0, 0, 0, 0.5) 0px 10px 10px 0, inset rgba(205, 155, 255, 0.5) 0px 5px 10px -7px",
          },
          "65%": {
            transform: "scale(1.4)",
            boxShadow: "rgba(0, 0, 0, 0) 0px 0 0 0",
          },
          "100%": {
            transform: "scale(1)",
            boxShadow:
              "rgba(0, 0, 0, 0.5) 0px 10px 10px 0, inset rgba(205, 155, 255, 0.5) 0px 5px 10px -7px",
          },
        },
        "color-change": {
          "0%": { color: "rgb(107, 114, 128)" },
          "50%": { color: "white" },
          "100%": { color: "rgb(107, 114, 128)" },
        },
      },
      inset: {
        "10%": "10%",
        "20%": "20%",
        "30%": "30%",
        "40%": "40%",
      },
      screens: {
        sm: { max: "600px" },
        xs: { max: "400px" },
      },
    },
  },
  plugins: [tailwindScrollbar],
} satisfies Config;
