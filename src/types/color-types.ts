import { CosmicTheme } from "./cosmic-theme";

export type ColorTypes =
  | "primary"
  | "secondary"
  | "background"
  | "light"
  | "textPrimary"
  | "textSecondary";

export const getColor = (theme: CosmicTheme, color: string) => {
  switch (color) {
    case "primary":
      return theme.colors.primary;
    case "secondary":
      return theme.colors.secondary;
    case "background":
      return theme.colors.background;
    case "light":
      return theme.colors.light;
    case "textPrimary":
      return theme.colors.textPrimary;
    case "textSecondary":
      return theme.colors.textSecondary;
    default:
      return color || "purple";
  }
};