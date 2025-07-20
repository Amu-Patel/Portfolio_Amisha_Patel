// tailwind.config.js
import scrollbarHide from "tailwind-scrollbar-hide";
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#98E4FF",   // your sidebar blue
        secondary: "white", // your background aqua B6FFFA
        accent: "#615fe2",    // your purple button
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    scrollbarHide
]
};
