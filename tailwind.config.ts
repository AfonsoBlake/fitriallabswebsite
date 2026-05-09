import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          highlight: '#FFFFFF',
          lavender: '#C4B8F0',
          indigo: '#6B6FD4',      // Main brand color
          deepIndigo: '#3B3A8A',
          darkest: '#1E1B4B',
        },
      },
    },
  },
  plugins: [],
};
export default config;