module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          black: "#0c0c0c",
          titleBar: "#333333",
          location: "#16C60C",
          tilde: "#3B78FF",
          text: "#cccccc",
          cursor: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
