/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "synthwave",
      "aqua",
      "luxury",
      "night",
      {
        mytheme: {
          "primary": "#ec4899",
          "secondary": "#a78bfa",
          "accent": "#14b8a6",
          "neutral": "#38bdf8",
          "base-100": "#fbcfe8",
          "info": "#db2777",
          "success": "#f43f5e",
          "warning": "#38bdf8",
          "error": "#57534e",
        }
      }
    ],
  },
}

