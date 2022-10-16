module.exports = {
  //   content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue,css,html}"],
  //   content: ["./src/**/*.{html,jsx,js,tsx}"],
  content: [
    "./src/**/*.{html,js,tsx,css,ts}",
    "./.html",
    "./components/**/*.tsx",
    "node_modules/flowbite-react/**/*.{html,js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { 500: "#8257e6", 300: "#996DFF" },
      },
      borderRadius: {
        md: "4px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
    require("flowbite/plugin"),
  ],
};
