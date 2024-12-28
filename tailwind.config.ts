import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "slate-900": "#0f172a",
      },
    },
  },
  plugins: [],
} satisfies Config;
