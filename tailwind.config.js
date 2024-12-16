/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React components
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Great Vibes", "cursive"], // Add Pacifico (or your custom font)
      },
    },
  },
  plugins: [],
};
