import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        helmut: {
          orange: "#D9531E",
          ink: "#17211F",
          green: "#1F4A43",
          cream: "#F4F0E7",
          paper: "#FFFCF6",
          muted: "#777B73"
        }
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        display: ["Arial Narrow", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(23, 33, 31, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;