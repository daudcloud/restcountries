module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-el": "hsl(209, 23%, 22%)",
        "dark-bg": "hsl(207, 26%, 17%)",
        "dark-text": "hsl(0, 0%, 100%)",
        "light-text": "hsl(200, 15%, 8%)",
        "light-input": "hsl(0, 0%, 52%)",
        "light-bg": "hsl(0, 0%, 98%)",
        "light-el": "hsl(0, 0%, 100%)",
        "light-hover": "hsl(0, 0%, 90%)",
        "light-active": "hsl(0, 0%, 80%)",
        "dark-hover": "hsl(209, 23%, 32%)",
        "dark-active": "hsl(209, 23%, 42%)",
      },
      fontFamily: {
        "nunito-sans": "Nunito Sans",
      },
      boxShadow: {
        "cust-shadow": "0 0 6px 1px rgba(0,0,0, .1)",
      },
    },
  },
  plugins: [],
};
