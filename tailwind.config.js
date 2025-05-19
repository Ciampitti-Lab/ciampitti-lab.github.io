/** @type {import('tailwindcss').Config} */
module.exports = {
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
        "purdue-secondary": {
          gray1: "#555960",
          gray2: "#6F727B",
          gray3: "#9D9795",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)"],
        serif: ["var(--font-lora)"],
        heading: ["var(--font-plus-jakarta)"],
        body: ["var(--font-lora)"],
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1.10)  rotate(0.3deg)" },
          "100%": { transform: "scale(1)  rotate(0deg)" },
        },
      },
      animation: {
        /* runs the full 4 s that each slide is visible */
        kenburns: "kenburns 4s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
