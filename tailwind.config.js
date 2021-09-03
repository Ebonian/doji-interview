module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FB7575",
        secondary: {
          100: "#F0F0F3",
          200: "#3F3D56",
          300: "#292D32",
          400: "#616161",
        },
      },
      fontFamily: {
        poppins: ["Poppins"],
        prompt: ["Prompt"],
      },
      boxShadow: {
        neulightdrop:
          "-10px -10px 30px #FFFFFF, 10px 10px 30px rgba(174, 174, 192, 0.4)",
        neulightinner:
          "inset -10px -10px 30px rgba(255, 255, 255, 0.7), inset 10px 10px 30px rgba(174, 174, 192, 0.2)",
        neudarkdrop: "-10px -10px 30px #FFFFFF, 10px 10px 30px    #AEAEC0",
        neudarkinner:
          "inset -5px -5px 10px #2C323A, inset 5px 5px 10px #23262D",
        lightbutton:
          "-5px -5px 15px #FFFFFF, 5px 5px 15px rgba(174, 174, 192, 0.4)",
        darkbutton: "-5px -5px 15px #2C323A, 5px 5px 15px #23262D",
      },
      width: {
        420: "420px",
        160: "160px",
        240: "240px",
      },
      height: {
        608: "608px",
        656: "656px",
        70: "70px",
      },
      inset: {
        popular: "-12px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
