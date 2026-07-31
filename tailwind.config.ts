import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#05070a",
          light: "#0a0f14",
          card: "#0c1218",
        },
        neon: {
          DEFAULT: "#39ff8c",
          dim: "#1c8f52",
        },
        volt: {
          DEFAULT: "#00b4ff",
          deep: "#0047ab",
        },
        signal: {
          DEFAULT: "#a855f7",
          deep: "#6d28d9",
        },
      },
      fontFamily: {
        display: ["var(--font-orbitron)", "sans-serif"],
        body: ["var(--font-rajdhani)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "cyber-grid":
          "linear-gradient(rgba(57,255,140,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,140,0.07) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at center, rgba(57,255,140,0.12) 0%, rgba(5,7,10,0) 70%)",
      },
      boxShadow: {
        "neon-glow": "0 0 10px rgba(57,255,140,0.6), 0 0 30px rgba(57,255,140,0.25)",
        "volt-glow": "0 0 10px rgba(0,180,255,0.6), 0 0 30px rgba(0,180,255,0.25)",
        "signal-glow": "0 0 10px rgba(168,85,247,0.6), 0 0 30px rgba(168,85,247,0.25)",
      },
      animation: {
        scan: "scan 4s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "spin-slower": "spin 14s linear infinite reverse",
        float: "float 6s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
