/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        GeegleBg:
          "linear-gradient(180deg, #CFF92A 0%, rgba(0, 255, 209, 0.79) 100%)",
      },
    },
  },
  plugins: [],
};
