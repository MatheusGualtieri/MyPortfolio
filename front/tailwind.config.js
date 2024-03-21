/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundImage: {
        lines: "url('/public/lines-main.svg')",
        "lines-alt": "url('/public/lines-alt.svg')",
      },
    },
  },
  plugins: [],
};
