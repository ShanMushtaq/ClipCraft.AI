/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#2A2A2A",
        input: "#2A2A2A",
        ring: "#FF3B30",
        background: "#0D0D0D",
        foreground: "#F5F5F5",
        primary: {
          DEFAULT: "#FF3B30",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#141414",
          foreground: "#8A8A8A",
        },
        success: "#34C759",
        warning: "#FF9F0A",
        muted: {
          DEFAULT: "#141414",
          foreground: "#8A8A8A",
        },
        accent: {
          DEFAULT: "#2A2A2A",
          foreground: "#F5F5F5",
        },
      },
      fontFamily: {
        heading: ["var(--font-syne)"],
        sans: ["var(--font-dm-sans)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
