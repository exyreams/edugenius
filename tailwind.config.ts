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
