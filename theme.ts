import { extendTheme } from "native-base";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#F6F5F9",  // ljusaste
      100: "#EAEAEA",
      200: "#D0D3E8",
      300: "#A2A8C9",
      400: "#4A4E9C",
      500: "#0A2463", // main
      600: "#08204F",
      700: "#061C3D",
      800: "#04162E",
      900: "#02101F"  // mörkaste
    },
    secondary: {
      50: "#FFECEC",
      100: "#FFD4D4",
      200: "#FFB2B2",
      300: "#FF8F8F",
      400: "#FF6C6C",
      500: "#FF3B30", // main
      600: "#E6362B",
      700: "#CC3026",
      800: "#B22A21",
      900: "#991E17"

    }
  },
  fontSizes: { xs: 12, sm: 14, md: 16, lg: 20, xl: 24 },
  fontWeights: { light: "300", normal: "400", medium: "500", semibold: "600", bold: "700" },
  space: { xs: 4, sm: 6, md: 12 },


  fontConfig: {
    System: {
      400: { normal: "System" },
      500: { normal: "System" },
      600: { normal: "System" },
      700: { normal: "System" },
    },
  },
  fonts: {
    heading: "System",
    body: "System",
    mono: "System",
  },
  textStyles: {
    heading1: {
      fontSize: "xl",
      fontWeight: "bold",
      color: "primary.500",
    },
    button: {
      fontSize: "md",
      fontWeight: "semibold",
      color: "white",
    }
  },

  breakpoints: {
    base: 0,   // Mobil (default)
    sm: 480,   // Mindre tablets
    md: 768,   // Större tablets
    lg: 992,   // Laptop
    xl: 1280,  // Desktop
  },

});



export { theme };
