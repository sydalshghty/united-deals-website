/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayColor: "#191C1F",
        whiteColor: "#FFFFFF",
        yellowColor: "#EBC80C",
        secondaryColor: "#1B6392",
        gray100: "#E4E7E9",
        gray300: "#ADB7BC",
        gray500: "#77878F",
        gray900: "#191C1F",
        gray600: "#5F6C72",
        gray400: "#929FA5",
        secondary700: "#1B6392",
        secondary500: "#2DA5F3",
        colorf6f6f6: "#f6f6f6",
        warning400: "#EFD33D",
        danger500: "#EE5858",
        primary100: "#FFE7D6",
        primary500: "#FA8232",
        gray50: "#F2F4F5"
      }
    },
  },
  plugins: [],
}

