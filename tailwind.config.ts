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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'steel-blue': '#4D7EA8',
        'raisin-black': '#202430',
        'celestial-blue': '#26A4FF',
        'green':'#2cb1bc',
        'green-muda':'#e0fcff',
        'green-tua': '#a5e6ed',
        'blue-tua': '#0f2a43',
      },
    },
  },
  plugins: [],
};
export default config;
