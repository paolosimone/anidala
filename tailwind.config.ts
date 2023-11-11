import type { Config } from "tailwindcss";

const colors = ["background", "foreground", "overlay", "primary"];

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: Object.fromEntries(
        colors.map((color) => [color, `rgb(var(--${color}) / <alpha-value>)`]),
      ),
      animation: {
        expand: "expand 1.5s ease-in-out infinite",
      },
      keyframes: {
        expand: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
