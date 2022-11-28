/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["acid"],
  },
};

// theme: { acid, extend: {} },
// daisyui: {
//   styled: true,
//   themes: true,
//   base: true,
//   utils: true,
//   logs: true,
//   rtl: false,
//   prefix: "",
//   darkTheme: "dark",
// },
