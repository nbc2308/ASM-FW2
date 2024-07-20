/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      gradientColorStops: {
        start: "#4E7C32",
        end: "#665345",
      },
    },
  },

  fontFamily: {
    sans: ["Poppins", "sans-serif"],
    baloo: ["Baloo", "sans-serif"],
  },

  plugins: [],
};
