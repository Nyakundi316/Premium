/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-oswald)", "sans-serif"],
        oswald: ["var(--font-oswald)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
