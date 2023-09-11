/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "500px",
      // => @media (min-width: 640px) { ... }

      md: "678px",
      // => @media (min-width: 768px) { ... }

      lg: "894px",
      // => @media (min-width: 1024px) { ... }

      xl: "1020px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1280px",
      // => @media (min-width: 1536px) { ... }
      "2xl": "1536px",
    },
    extend: {
      colors: {
        amazon_blue: {
          light: "#37475a",
          DEFAULT: "#232f3e",
        },
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans - serif"],
      },
    },
  },
  plugins: [],
};
