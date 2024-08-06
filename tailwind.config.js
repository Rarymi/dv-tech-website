/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    screens: {
      xs: "375px",
      sm: "576px",
      md: "960px",
      lg: "1440px",
    },
  },
  plugins: [],
};
