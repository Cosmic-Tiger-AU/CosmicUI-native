import React from "react";
import { TextStyle } from "react-native";
import { getColor } from "~/types/color-types";
import { CosmicTextStyle } from "~/types/cosmic-text-style";
import { getFont } from "~/types/font-types";
import { translateCosmicViewStyles } from "~/util/withViewStyle";
import { CosmicTheme, useTheme } from "..";

export type CosmicTextProps<P> = P & {
  style?: CosmicTextStyle;
};

export const translateCosmicTextStyles = <T extends TextStyle>(
  theme: CosmicTheme,
  style?: CosmicTextStyle,
): Partial<T> => {
  style = translateCosmicViewStyles(theme, style);

  if (style.fontWeight) {
    const [family, weight] = getFont(theme, style.fontWeight);

    style.fontFamily = family;
    style.fontWeight = weight;
  }

  style.color = getColor(theme, style.color || "textPrimary");

  if (style.textDecorationColor)
    style.textDecorationColor = getColor(theme, style.textDecorationColor);

  if (style.textShadowColor)
    style.textShadowColor = getColor(theme, style.textShadowColor);

  return style as T;
};

const withTextStyle = <P extends { style?: any }>(
  Component: React.ComponentType<P>,
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<CosmicTextProps<P>> & React.RefAttributes<any>
> => {
  return React.forwardRef((props: CosmicTextProps<P>, ref: React.Ref<any>) => {
    const { style, ...rest } = props;
    const theme = useTheme();

    return (
      <Component
        {...(rest as P)}
        style={translateCosmicTextStyles(theme, style || {})}
        ref={ref}
      />
    );
  });
};

export default withTextStyle;
