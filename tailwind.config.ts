import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulseGrow: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGray: '#16161A',
        grayCard: '#242629'
      },
    },
    animation: {
      pulseGrow: "pulseGrow 1s infinite",
    },
  },
  plugins: [],
} satisfies Config;
