/** @type {import("tailwindcss").Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#fafafa",
        surface: "#ffffff",
        ink: "#000000",
        "ink-secondary": "#666666",
        "ink-muted": "#888888",
        "border-subtle": "rgba(0, 0, 0, 0.08)",
        success: "#00cc66",
        syntax: {
          keyword: "#0000ff",
          property: "#660099",
          string: "#008000",
          comment: "#a0a0a0",
          number: "#0984e3",
        },
      },
      boxShadow: {
        premium:
          "0 4px 30px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.02)",
        "premium-hover":
          "0 20px 40px rgba(0, 0, 0, 0.06), 0 1px 5px rgba(0, 0, 0, 0.03)",
      },
      borderRadius: {
        card: "12px",
        control: "8px",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "SFMono-Regular",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
      maxWidth: {
        content: "1100px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        "marquee-horizontal": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        blink: "blink 1s infinite",
        "marquee-horizontal": "marquee-horizontal 30s linear infinite",
      },
    },
  },
  plugins: [],
};

module.exports = config;
