/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        limelight: ["Limelight", "cursive"],
        cormorant: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};



