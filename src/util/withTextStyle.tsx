import React, {
  ComponentType,
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
} from "react";
import { TextStyle } from "react-native";
import { useTheme } from "..";
import { CosmicTheme } from "..";
import { getColor } from "~/types/color-types";
import { getFont } from "~/types/font-types";
import { CosmicTextStyle } from "~/types/cosmic-text-style";

export type CosmicTextProps<P> = P & {
  style?: CosmicTextStyle;
};

export const translateCosmicTextStyles = <
  T extends TextStyle,
>(
  theme: CosmicTheme,
  style?: CosmicTextStyle
): Partial<T> => {

  if(style.fontWeight) {
    const [ family, weight ] = getFont(theme, style.fontWeight);

    style.fontFamily = family;
    style.fontWeight = weight;
  }

  style.color = getColor(theme, style.color || "textPrimary");

  if(style.textDecorationColor) style.textDecorationColor = getColor(theme, style.textDecorationColor);

  if(style.textShadowColor) style.textShadowColor = getColor(theme, style.textShadowColor);

  return style as T;
};

const withTextStyle = <P extends { style?: any }>(
  Component: ComponentType<P>
): React.ForwardRefExoticComponent<
  PropsWithoutRef<CosmicTextProps<P>> & RefAttributes<any>
> => {
  return forwardRef((props: CosmicTextProps<P>, ref: React.Ref<any>) => {
    const { style, ...rest } = props;
    const theme = useTheme();

    return (
      <Component {...(rest as P)} style={translateCosmicTextStyles(theme, style || {})} ref={ref} />
    );
  });
};

export default withTextStyle;
