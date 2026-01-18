/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)", "sans-serif"],
      },

      /* 🎨 CENTRALIZED COLOR SYSTEM */
      colors: {
        /* Brand */
        brand: "rgb(var(--brand) / <alpha-value>)",
        brand2: "rgb(var(--brand-2) / <alpha-value>)",

        /* Backgrounds */
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",

        /* Text */
        ink: "rgb(var(--text) / <alpha-value>)",
        muted: "rgb(var(--text-muted) / <alpha-value>)",

        /* Borders */
        line: "rgb(var(--border) / <alpha-value>)",

        /* Status */
        success: "rgb(var(--success) / <alpha-value>)",
        danger: "rgb(var(--danger) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

export default config;
