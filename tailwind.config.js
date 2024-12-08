/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        primary: "rgba(var(--primary))",
        border: "rgba(var(--border))",
        card: "rgba(var(--card))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
