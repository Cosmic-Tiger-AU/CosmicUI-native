import React, {
  ComponentType,
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
} from "react";
import { translateCosmicStyles } from "~/util/translator";
import { CosmicStyles, CosmicTheme, useTheme } from "..";

export type CosmicProps<P> = P & {
  cs?: CosmicStyles;
  color?:
    | "primary"
    | "secondary"
    | "background"
    | "light"
    | "textPrimary"
    | "textSecondary";
  weight?: "light" | "regular" | "bold";
};

const getColor = (theme: CosmicTheme, color: string) => {
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
      return color || "black";
  }
};

const getFont = (theme: CosmicTheme, weight: string) => {
  switch (weight) {
    case "light":
      return theme.fonts.light;
    case "regular":
      return theme.fonts.regular;
    case "bold":
      return theme.fonts.bold;
    default:
      return weight || "regular";
  }
};

const getWeight = (theme: CosmicTheme, weight: string): number => {
  switch (weight) {
    case "light":
      return 300;
    case "regular":
      return 400;
    case "bold":
      return 700;
    default:
      return 400;
  }
};

const withCs = <P extends { style?: any }>(
  Component: ComponentType<P>
): React.ForwardRefExoticComponent<
  PropsWithoutRef<CosmicProps<P>> & RefAttributes<any>
> => {
  return forwardRef((props: CosmicProps<P>, ref: React.Ref<any>) => {
    const theme = useTheme();
    const themeStyles = {
      color: getColor(theme, props.color),
      fontFamily: getFont(theme, props.weight),
      fontWeight: getWeight(theme, props.weight),
    };
    const { cs, style, ...rest } = props;
    const smashedStyles = cs ? translateCosmicStyles(cs) : {};
    return (
      <Component
        {...(rest as P)}
        style={[style, smashedStyles, themeStyles]}
        ref={ref}
      />
    );
  });
};

export default withCs;
