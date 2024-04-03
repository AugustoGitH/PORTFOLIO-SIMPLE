import { DefaultTheme } from "styled-components";
import { breakFonts, breakpoints } from "./breakpoints";
import { colorsModeDark } from "./colorsMode";

export const theme: DefaultTheme = {
  colors: colorsModeDark,
  limits: {
    content: "1100px",
  },
  breakpoints,
  font: {
    family: {
      Poppins: "'Poppins', sans-serif",
      Roboto: "'Roboto', sans-serif",
    },
    size: breakFonts.lg,
  },
};
