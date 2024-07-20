
/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add any other paths that contain Tailwind classes
  ],
  
  theme: {},
  plugins: [
    require("daisyui"),
  ],
  darkMode: "class",
 
}