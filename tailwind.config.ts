import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: "#E0C200",
        lilac: "#49007A",
        rose: "#9E606F",
        sage: "#8C542C",
        ivory: "#F7CFCA",
      },
      backgroundImage: (p) => ({
        "linear-layer": `linear-gradient(to bottom, ${p.theme("colors.lilac")} 0%, ${p.theme("colors.sage")} 30%, ${p.theme("colors.sky")} 100%)`,
        "layer-2": `radial-gradient(circle at 60% 40%, ${p.theme("colors.rose")} 0%, transparent 50%)`,
        "layer-1": `radial-gradient(circle at 10% 60%, ${p.theme("colors.rose")} 0%, transparent 70%)`,
      }),
      keyframes: {
        opacityPulseLight: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "0.8" },
        },
        opacityPulseHeavy: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "0.9" },
        },
        cloud1: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(50px)" },
          "100%": { transform: "translateX(0)" },
        },
        cloud2: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-60px)" },
          "100%": { transform: "translateX(0)" },
        },
        cloud3: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(30px)" },
          "100%": { transform: "translateX(0)" },
        },
        cloud4: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-40px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "cloud-1": "cloud1 40s infinite ease-in-out",
        "cloud-2": "cloud2 50s infinite ease-in-out",
        "cloud-3": "cloud3 60s infinite ease-in-out",
        "cloud-4": "cloud4 55s infinite ease-in-out",
        opacityPulseSlow: "opacityPulseHeavy 21s infinite ease-in-out",
        opacityPulseFast: "opacityPulseLight 3.2s infinite ease-in-out",
        opacityPulseMedium: "opacityPulseLight 8s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
