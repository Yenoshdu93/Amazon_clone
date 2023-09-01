import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500ox",
        md: "667px",
        mdl: "760px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
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
export default config;
