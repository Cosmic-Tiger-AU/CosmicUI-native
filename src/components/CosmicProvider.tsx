import React from "react";
import { CosmicTheme } from "..";

const defaultTheme: CosmicTheme = {
  fonts: {
    bold: "Roboto-Bold",
    light: "Roboto-Light",
    regular: "Roboto-Regular",
  },
  colors: {
    primary: "#FFC107",
    secondary: "#FF9800",
    background: "#FFFFFF",
    light: "#303030",
    textPrimary: "#000000",
    textSecondary: "#000000",
  },
};

const ThemeContext = React.createContext<CosmicTheme>(defaultTheme);

export const ThemeProvider: React.FC<{
  theme: CosmicTheme;
  children: React.ReactNode;
}> = ({ theme, children }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

export const useTheme = () => React.useContext(ThemeContext);
