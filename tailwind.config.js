module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {},
  variants: {
    extend: {
      fontWeight: ["hover", "focus"],
      backgroundColor: ["disabled"],
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
