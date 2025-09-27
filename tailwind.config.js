/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium dark color palette
        primary: {
          DEFAULT: "#0a0a0a", // Deep black
          50: "#f8f8f8",
          100: "#f0f0f0",
          200: "#e4e4e4",
          300: "#d1d1d1",
          400: "#b4b4b4",
          500: "#9a9a9a",
          600: "#818181",
          700: "#6a6a6a",
          800: "#1a1a1a", // Dark charcoal
          900: "#0f0f0f", // Deeper black
          950: "#0a0a0a", // Deepest black
        },
        accent: {
          DEFAULT: "#ffffff", // Pure white for contrast
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        // Dark surface colors
        surface: {
          DEFAULT: "#111111",
          dark: "#0a0a0a",
          light: "#1a1a1a",
          lighter: "#262626",
        },
        // Glow and highlight colors
        glow: {
          primary: "rgba(255, 255, 255, 0.1)",
          secondary: "rgba(255, 255, 255, 0.05)",
          accent: "rgba(255, 255, 255, 0.2)",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
        glow: "glow 2s ease-in-out infinite alternate",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%": {
            boxShadow:
              "0 0 20px rgba(255, 255, 255, 0.1), 0 0 40px rgba(255, 255, 255, 0.05)",
          },
          "100%": {
            boxShadow:
              "0 0 30px rgba(255, 255, 255, 0.2), 0 0 60px rgba(255, 255, 255, 0.1)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
        "gradient-surface": "linear-gradient(135deg, #111111 0%, #1a1a1a 100%)",
        "gradient-glow":
          "radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(255, 255, 255, 0.1)",
        "glow-lg": "0 0 40px rgba(255, 255, 255, 0.15)",
        "inner-glow": "inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        dark: "0 10px 30px rgba(0, 0, 0, 0.5)",
        "dark-lg": "0 20px 50px rgba(0, 0, 0, 0.7)",
      },
      backdropBlur: {
        xs: "2px",
      },
      borderColor: {
        glow: "rgba(255, 255, 255, 0.1)",
        "glow-light": "rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [],
};
