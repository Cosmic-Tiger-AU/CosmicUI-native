import { TextStyle } from "react-native";
import { CosmicTheme } from "./cosmic-theme";

export type FontTypes = "light" | "regular" | "bold";

export const getFont = (
  theme: CosmicTheme,
  weight: string
): [string, TextStyle["fontWeight"]] => {
  switch (weight) {
    case "light":
      return [theme.fonts.light, "300"];
    case "regular":
      return [theme.fonts.regular, "normal"];
    case "bold":
      return [theme.fonts.bold, "bold"];
    default:
      return [theme.fonts.regular || "sans-serif", "normal"];
  }
};
