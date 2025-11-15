/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5272FF",
        grey: "#8CA3CD",
        green: "#11C25D",
        red: "#EE0039",
        black: "#0C0C0C",
        white: "#FFFFFF",
        bgLight: "#EEF7FF",
        bgDark: "#0D224A"
      },
    },
  },
  plugins: [],
};
