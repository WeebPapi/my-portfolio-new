/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F5F3EE",
        surface: "#FBFAF7",
        sand: "#E9E5DB",
        line: "#D8D3C8",
        muted: "#5C5953",
        ink: "#1B1A18",
        accent: { DEFAULT: "#B4431E", soft: "#F0A07E" },
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
