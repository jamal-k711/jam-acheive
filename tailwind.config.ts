import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0D1B2A",
          mid: "#142233",
          light: "#1C2F45",
        },
        orange: {
          DEFAULT: "#FF7A1A",
          dim: "rgba(255, 122, 26, 0.12)",
        },
        muted: {
          DEFAULT: "#8A9BB0",
        },
        divider: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        pill: "100px",
      },
      animation: {
        "blink": "blink 0.7s step-end infinite",
        "bounce-arrow": "bounceArrow 2s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float-delayed 8s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "tilt-3d": "tilt3d 10s ease-in-out infinite",
        "spotlight": "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        blink: {
          "50%": { opacity: "0" },
        },
        bounceArrow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotateY(0deg)" },
          "50%": { transform: "translateY(-16px) rotateY(5deg)" },
        },
        "float-delayed": {
          "0%, 100%": { transform: "translateY(0px) rotateY(0deg)" },
          "50%": { transform: "translateY(-20px) rotateY(-3deg)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 122, 26, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 122, 26, 0.6), 0 0 80px rgba(255, 122, 26, 0.2)" },
        },
        tilt3d: {
          "0%, 100%": { transform: "perspective(800px) rotateY(-5deg) rotateX(2deg)" },
          "25%": { transform: "perspective(800px) rotateY(5deg) rotateX(-2deg)" },
          "50%": { transform: "perspective(800px) rotateY(-3deg) rotateX(3deg)" },
          "75%": { transform: "perspective(800px) rotateY(4deg) rotateX(-1deg)" },
        },
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: "1", transform: "translate(-50%, -40%) scale(1)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
