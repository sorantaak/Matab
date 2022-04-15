module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'vazir': 'Vazirmatn'
    },
    extend: {
      colors: {
        darkGold: "#BF9957",
        brightGold: "#E7BF74",
        backgroundHeader: "rgba(0,0,0,0.5)",
        backSectionVideo: "#ECE8D9",
        textParColor: "#363636",
        textFooter: "#C5C5C5",
        footer: "#6A6A6A",
      },
      backgroundImage: {
        'header-img': "url('../styles/img/header.jpg')",
        'footer-img': "url('../styles/img/footer.jpg')",
        'backLogin-img': "url('../styles/img/login.jpg')",
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('@tailwindcss/aspect-ratio')],
}