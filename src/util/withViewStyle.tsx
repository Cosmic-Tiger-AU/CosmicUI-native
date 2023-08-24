import React, { forwardRef } from "react";
import { ViewStyle } from "react-native";
import { getColor } from "~/types/color-types";
import { CosmicViewStyle } from "~/types/cosmic-view-style";
import { CosmicTheme, useTheme } from "..";

export type CosmicViewProps<P> = P & {
  style?: CosmicViewStyle;
};

export const translateCosmicViewStyles = <T extends ViewStyle>(
  theme: CosmicTheme,
  style?: CosmicViewStyle,
): Partial<T> => {
  if (style.backgroundColor)
    style.backgroundColor = getColor(theme, style.backgroundColor);

  if (style.borderBottomColor)
    style.borderBottomColor = getColor(theme, style.borderBottomColor);

  if (style.borderColor) style.borderColor = getColor(theme, style.borderColor);

  if (style.borderEndColor)
    style.borderEndColor = getColor(theme, style.borderEndColor);

  if (style.borderLeftColor)
    style.borderLeftColor = getColor(theme, style.borderLeftColor);

  if (style.borderRightColor)
    style.borderRightColor = getColor(theme, style.borderRightColor);

  if (style.borderStartColor)
    style.borderStartColor = getColor(theme, style.borderStartColor);

  if (style.borderTopColor)
    style.borderTopColor = getColor(theme, style.borderTopColor);

  return style as T;
};

const withViewStyle = <P extends { style?: any }>(
  Component: React.ComponentType<P>,
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<CosmicViewProps<P>> & React.RefAttributes<any>
> => {
  return forwardRef((props: CosmicViewProps<P>, ref: React.Ref<any>) => {
    const { style, ...rest } = props;
    const theme = useTheme();

    return (
      <Component
        {...(rest as P)}
        style={translateCosmicViewStyles(theme, style || {})}
        ref={ref}
      />
    );
  });
};

export default withViewStyle;
