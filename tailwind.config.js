/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          darkblue: "#0F172A",
          blue: "#008ED6",
          white: "#FFFFFF",
          green: "#3DBC21",
        },
        secondary: {
          purple: "#6418C3",
          softpurple: "#F6EEFF",
          light: "#F4F4F4",
          lightmedium: "#D8D8D8",
          grey: "#969696",
          greydark: "#646464",
          dark: "#323232",
          activeblue: "#0040A1",
        },
        warm: {
          yellow: "#FED766",
          orange: "#FF8B00",
          red: "#E33E38",
          redtomato: "#FE4A49",
        },
        cool: {
          blueactive: "#0057DA",
          bluehover: "#1BA2E8",
        },
      },
    },
  },
  plugins: [],
};
