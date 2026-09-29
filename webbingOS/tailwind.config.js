/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        "computer-primary": "#24AEFF",
        "computer-black": "rgb(10, 10, 10)",
        "computer-light-black": "rgb(20, 20, 20)",

        "lighter-black": "rgb(25, 25, 25)",

        "secondary-color": "rgb(74, 222, 128)",
        "link-color": "#A651F4"
      },
      borderRadius:
      {
        'size1': "4px"
      }
    },
    screens: {
      quickAccessOne: "1000px",
      quickAccessTwo: "1210px",
      quickAccessThree: "1420px",
      quickAccessFour: "1600px",
      xxs: "360px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
      fileTextXL: "1600px",
      fileTextLG: "1400px",
      fileTextMD: "1200px",
      fileTextSM: "1000px",
      fileTextXSM: "900px",
      fileListShowDetails: "680px",
      desktopMode: "1100px",
    },
  },
  plugins: [],
};
