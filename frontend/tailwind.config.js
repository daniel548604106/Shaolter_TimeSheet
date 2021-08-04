module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        logo: "#110662",
      },
      backgroundImage: (theme) => ({
        login_background: "url('/img/login_background.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
