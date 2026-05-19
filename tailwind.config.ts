import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: { xs: "475px", sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" },
    extend: {
      colors: {
        bg: { base: "#08090C", surface: "#0F1117", elevated: "#161922" },
        red: { DEFAULT: "#E63946", dim: "rgba(230, 57, 70, 0.12)", glow: "rgba(230, 57, 70, 0.25)" },
        indigo: { DEFAULT: "#6366F1", dim: "rgba(99, 102, 241, 0.12)", glow: "rgba(99, 102, 241, 0.3)" },
        primary: "#F0F2F7",
        secondary: "#8892A4",
        muted: "#4A5568",
        border: "rgba(255, 255, 255, 0.06)",
        glass: "rgba(15, 17, 23, 0.6)",
      },
      fontFamily: {
        display: ["Cabinet Grotesk", "sans-serif"],
        body: ["Geist", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
      borderRadius: { card: "16px", pill: "100px" },
      animation: {
        "blink": "blink 0.7s step-end infinite",
        "bounce-arrow": "bounceArrow 2s ease infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        blink: { "50%": { opacity: "0" } },
        bounceArrow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(230, 57, 70, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(230, 57, 70, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
