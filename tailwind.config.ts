import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'antonio': ['Antonio', 'sans-serif'],
        'telegraf': ['Telegraf', 'sans-serif'],
        'interphases': ['"TT Interphases"', 'sans-serif'],
      },
      colors: {
        'primary-blue': 'var(--primary-blue)',
        'secondary-blue': 'var(--secondary-blue)',
        'light-blue': 'var(--light-blue)',
        'highlight-blue': 'var(--highlight-blue)',
      },
    },
  },
  plugins: [],
};
export default config;
