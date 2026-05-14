import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Purdue University colors
        "purdue-gold": "#CFB991",
        "purdue-rush": "#DAAA00",
        "purdue-field": "#DDB945",
        "purdue-black": "#000000",
        "purdue-surface": "#0d0d0d",
        "purdue-white": "#f5f0e8",
        "purdue-secondary": {
          gray1: "#555960",
          gray2: "#6F727B",
          gray3: "#9D9795",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-outfit)"],
        heading: ["var(--font-outfit)"],
        body: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};

export default config;
