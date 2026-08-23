module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ad2c00",
        "primary-hover": "#c5451a",
        charcoal: "#1a1a1a",
        "charcoal-light": "#2a2a2a",
        offwhite: "#faf9f9",
        secondary: "#5f5e5e",
        surface: "#faf9f9",
        "surface-dim": "#dbdad9",
        "surface-bright": "#faf9f9",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f5f3f3",
        "surface-container": "#efeded",
        "surface-container-high": "#e9e8e8",
        "surface-container-highest": "#e3e2e2",
        "on-surface": "#1b1c1c",
        "on-surface-variant": "#5d4038",
        inverse: "#303031",
        "inverse-on-surface": "#f2f0f0",
        outline: "#926f66",
        "outline-variant": "#e7bdb2",
        "surface-tint": "#b12d00",
        "error": "#ba1a1a",
      },
      borderRadius: {
        sm: "0.125rem",
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "9999px",
      },
      fontFamily: {
        display: ["Hanken Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Geist", "sans-serif"],
      },
      spacing: {
        containerPadding: "40px",
        sectionGap: "160px",
        gutter: "24px",
        marginMobile: "20px",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["focus-visible", "disabled"],
      opacity: ["disabled"],
    },
  },
  plugins: [
    function({ addComponents, theme }) {
      const baseColor = theme("colors.primary");
      const hoverColor = theme("colors.primary-hover");
      
      addComponents({
        ".btn-primary": {
          "@apply inline-flex items-center justify-center rounded-md font-mono-label text-label-caps uppercase tracking-widest transition-colors duration-300": {},
          backgroundColor: "var(--color-primary, #ad2c00)",
          color: "var(--color-background, #faf9f9)",
          "&:hover": {
            backgroundColor: "var(--color-primary-hover, #c5451a)",
          },
        },
        ".btn-secondary": {
          "@apply inline-flex items-center justify-center rounded-md font-mono-label text-label-caps uppercase tracking-widest transition-colors duration-300": {},
          border: "1px solid var(--tw-color-secondary, #5f5e5e)",
          color: "var(--tw-color-on-background, #1b1c1c)",
          "&:hover": {
            backgroundColor: "var(--tw-color-on-background, #1b1c1c)",
            borderColor: "var(--tw-color-primary, #ad2c00)",
          },
        },
        ".nav-link": {
          "@apply font-headline-md text-headline-md tracking-tighter hover:text-primary transition-colors": {},
        },
        ".badge": {
          "@apply inline-flex items-center rounded-md px-3 py-1 font-label-caps text-label-caps uppercase text-[10px]": {},
        },
      });
    },
  ],
};