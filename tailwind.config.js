/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundColor: {
        primary: "#383838",
        secondary: "#2A2A2A",
        blue: "#28B3BC",
        green: "#6DDA5B",
        red: "#DB3333",
        violet: "rgba(150, 40, 188, 0.89)",
      },
      textColor: {
        primary: "#383838",
        secondary: "#2A2A2A",
        blue: "#28B3BC",
        green: "#6DDA5B",
        red: "#DB3333",
        violet: "rgba(150, 40, 188, 0.89)",
      },
      stroke: {
        primary: "#383838",
        secondary: "#2A2A2A",
        blue: "#28B3BC",
        green: "#6DDA5B",
        red: "#DB3333",
        violet: "rgba(150, 40, 188, 0.89)",
      },
      borderColor: {
        primary: "#383838",
        secondary: "#2A2A2A",
        blue: "#28B3BC",
        green: "#6DDA5B",
        red: "#DB3333",
        violet: "rgba(150, 40, 188, 0.89)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
