/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#007BC8",
        success: "#008945",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
