/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F1F4F5",
        surface: "#F8FAFB",
        sand: "#E1E8EB",
        line: "#CBD5DA",
        muted: "#4F5D66",
        ink: "#121A1E",
        accent: { DEFAULT: "#0A6680", soft: "#7DD0E3" },
      },
      fontFamily: {
        sans: ['"Funnel Sans"', "system-ui", "sans-serif"],
        display: ['"Funnel Display"', "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
}
