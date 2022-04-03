module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        darkGold: "#BF9957",
        brightGold: "#E7BF74",
        backgroundHeader: "rgba(0,0,0,0.5)"
      },
      backgroundImage: {
        'header-img': "url('../styles/img/header.jpg')",
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}