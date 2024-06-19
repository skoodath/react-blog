/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        text: "rgba(var(--text))"
      }
    },
  },
  plugins: [],
}

