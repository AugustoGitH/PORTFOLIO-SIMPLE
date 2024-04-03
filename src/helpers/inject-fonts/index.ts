import { FontGoogle } from "./interfaces";

export default function injectFonts(fonts: FontGoogle[]) {
  const stringFontsMap = fonts
    .map((font) => `family=${font.name}:wght@${font.weights.join(";")}`)
    .join("&");

  return `https://fonts.googleapis.com/css2?${stringFontsMap}&display=swap`;
}
