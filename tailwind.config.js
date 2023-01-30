/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#71412e",
        "primary-light": "#824B35",
        secondary: "#9b7b6e",
        "secondary-light": "#CDF6FF",
      },
    },
  },
  plugins: [],
};
