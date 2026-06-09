// Color palette - Modern & vibrant
export const colors = {
  primary: "#F2142C", // Bright red
  primaryHover: "#F64527", // Coral/Red-orange
  dark: "#121212", // Dark
  darkText: "#121212",
  lightBg: "#FFFFFF", // White background
  white: "#FFFFFF",
  accent: "#FECE05", // Yellow
  accentOrange: "#FFB01D", // Gold/Orange
  border: "#E8E8E8", // Light border
  cardBg: "#F5F5F5", // Light gray card
} as const;

// Common Tailwind classes
export const styles = {
  badge: "rounded-full px-4 py-2 text-xs uppercase tracking-[0.22em]",
  button:
    "inline-flex rounded-full px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition",
  card: "rounded-[2rem] border p-6 shadow-[0_18px_45px_rgba(176,63,11,0.14)]",
  heading: "font-black uppercase tracking-[-0.04em]",
  tag: "rounded-full bg-[#fff4e8] px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em]",
} as const;
