import type { Config } from "tailwindcss";

export default {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2px",
        // sm: "0.25rem",
        // lg: "0.5rem",
        // xl: "0.75",
        // "2xl": "1rem",
      },
    },
    extend: {
      screens: {
        "900px": "900px",
      },
      colors: {
        "slate-900": "#0f172a",
      },
    },
  },
  plugins: [],
} satisfies Config;
