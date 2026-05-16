/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary":          "#0ddbf2",
        "primary-dim":      "#08daf1",
        "background-dark":  "#0A0B10",
        "surface-dark":     "#14151C",
        "surface-card":     "#1a2122",
        "text-main":        "#E2E8F0",
        "text-muted":       "#8A8F98",
        "text-subtle":      "#bac9cc",
        "border-dark":      "#1F222E",
        "border-mid":       "#3b494c",
        "accent-green":     "#10b981",
        "on-primary":       "#00363d",
      },
      fontFamily: {
        "sans": ["Space Grotesk", "sans-serif"],
        "mono": ["Fira Code", "monospace"],
      },
      fontSize: {
        "display":    ["4.5rem", { lineHeight: "1.1",  letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-sm": ["3rem",   { lineHeight: "1.2",  fontWeight: "700" }],
        "title":      ["2rem",   { lineHeight: "1.2",  fontWeight: "700" }],
        "subtitle":   ["1.5rem", { lineHeight: "1.3",  fontWeight: "600" }],
        "body-lg":    ["1.125rem",{ lineHeight: "1.7", fontWeight: "400" }],
        "body":       ["1rem",   { lineHeight: "1.6",  fontWeight: "400" }],
        "body-sm":    ["0.875rem",{ lineHeight: "1.5", fontWeight: "400" }],
        "label":      ["0.75rem",{ lineHeight: "1",    letterSpacing: "0.15em", fontWeight: "700" }],
        "label-sm":   ["0.65rem",{ lineHeight: "1",    letterSpacing: "0.15em", fontWeight: "700" }],
      },
      spacing: {
        "nav":        "4rem",
        "container":  "80rem",
        "section":    "6rem",
        "gutter":     "1.5rem",
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "sm":      "0.25rem",
        "md":      "0.5rem",
        "lg":      "1rem",
        "xl":      "1.25rem",
        "full":    "9999px",
      },
      boxShadow: {
        "neon":       "0 0 40px rgba(13, 219, 242, 0.15)",
        "neon-md":    "0 0 20px rgba(13, 219, 242, 0.25)",
        "neon-lg":    "0 0 40px rgba(13, 219, 242, 0.35)",
        "neon-sm":    "0 0 10px rgba(13, 219, 242, 0.20)",
      },
      maxWidth: {
        "container": "80rem",
      },
    },
  },
  plugins: [],
}