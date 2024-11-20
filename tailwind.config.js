/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./packages/components/src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6682FB",
        secondary: "#E2E8FF",
        darkGrey: "#2D3A48",
        midGrey: "#728192",
        lightGrey: "#F9FAFB",
        border: "#CFD9E2",
        placeholder: "#B3C0CF",
      },
    },
  },
  plugins: [],
};
