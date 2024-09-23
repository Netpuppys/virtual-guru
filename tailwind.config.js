/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "theme-orange": "#FF914D",
        "navy-blue": "#323A53",
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'], // Add Poppins here
        helveticaNow: ['var(--font-helvetica-now-display)', 'sans-serif'], // Also for the local font
      },
      keyframes: {
        // Define keyframes for the animation
        colorFade: {
          from: {
            background: "#ff914d",
            color: "#fff"
          }, to: {
            color: "#ff914d",
            background: "#fff"
          }
        },
        slideIn: {
          from: {
            bottom: "-100%",
            opacity: "0.5"
          }, to: {
            bottom: 0,
            opacity: 1
          }
        }
      },
      animation: {
        // Define animation using keyframes
        "color-fade": 'colorFade 0.3s ease-out forwards',
        "slide-in": "slideIn 0.5s ease"
      },
    },
  },
  plugins: [],
};