import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        acid: "#ccff00",
        ink: "#0a0a0a",
        panel: "#111111",
        line: "#2a2a2a",
        muted: "#8c8c8c",
      },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        sans: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
