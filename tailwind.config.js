/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-paper)",
        surface: {
          DEFAULT: "var(--color-surface)",
          elevated: "var(--color-surface-elevated)",
        },
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
          light: "var(--color-primary-light)",
        },
        petrol: {
          DEFAULT: "#006B63",
          50: "#e6f7f5",
          100: "#ccefe9",
          200: "#99dfd3",
          300: "#66cfbd",
          400: "#33bfa7",
          500: "#00a88f",
          600: "#00897b",
          700: "#006b63",
          800: "#004f4a",
          900: "#003632",
        },
        navy: {
          DEFAULT: "#172B3A",
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#627d98",
          600: "#486581",
          700: "#334e68",
          800: "#243b53",
          900: "#172b3a",
          950: "#0a131a",
        },
        sage: {
          DEFAULT: "#E1EEE8",
          100: "#f0f7f4",
          200: "#e1eee8",
          300: "#c3ded3",
        },
        ink: {
          DEFAULT: "var(--color-ink)",
          muted: "var(--color-muted)",
          faint: "var(--color-faint)",
        },
      },
      fontFamily: {
        display: ["'Outfit'", "'Space Grotesk'", "sans-serif"],
        sans: ["'Inter'", "'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "8px",
        md: "10px",
        lg: "12px",
        xl: "16px",
        '2xl': "20px",
        '3xl': "24px",
      },
      animation: {
        'float-slow': 'floatY 4s ease-in-out infinite',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
