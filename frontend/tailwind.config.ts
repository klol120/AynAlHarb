import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandNavy: "#0f2238",
        brandRed: "#bf1e2e",
        brandSoft: "#eef3f8"
      }
    }
  }
} satisfies Config;
