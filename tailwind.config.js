const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./original_components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)"],
      },
      minHeight: {
        screen_90: "90vh",
        screen_80: "80vh",
        screen_70: "70vh",
        screen_75: "75vh",
        screen_60: "60vh",
        screen_65: "65vh",
        screen_50: "50vh",
        screen_40: "40vh",
        screen_39: "39vh",
        screen_30: "30vh",
        screen_20: "20vh",
        screen_10: "10vh",
      },
      colors: {
        transparent: "transparent",
        primary: "#7DCFFA",
        secondary: "#B5E1F9",
        thirdinary: "#F4BBA2",
        accent: "#F9CDB5",
        accentMono: "#F5AD86",
        accentAnalogousOne: "#F9EFB5",
        accentAnalogousTwo: "#F9B5BF",
        accentTriad: "#B5F9CD",
        accentTriad: "#CDB5F9",
        accentTetraTwo: "#BFF9B5",
        accentTetraThree: "#B5E1F9",
        accentTetraFour: "#EFB5F9",
        slateSevenHundred: "#334155",
        slateEightHundred: "#1e293b",
        slateNineHundred: "#0f172a",
      },
    },
    keyframes: {
      fade_in: {
        "0%": {
          opacity: "0",
        },
        "100%": {
          opacity: "1",
        },
      },
      pulse: {
        "0%, 100%": {
          opacity: "1",
        },
        "50%": {
          opacity: ".5",
        },
      },
    },
    animation: {
      fade_in: "fade_in 2s ease-out",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },
    lineClamp: {
      10: "10",
      12: "12",
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
