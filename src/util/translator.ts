import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { CosmicStyles } from "~/types/cosmic-styles";

/**
 * Converts shorthand style properties to React Native styles.
 *
 * @param shorthand - The shorthand style object.
 * @returns The converted React Native styles of type T (ViewStyle, TextStyle, ImageStyle).
 */
export const translateCosmicStyles = <
  T extends ViewStyle | TextStyle | ImageStyle,
>(
  shorthand?: CosmicStyles
): Partial<T> => {
  if (!shorthand) {
    return {};
  }

  const styles = {} as T;

  // Width and Height

  if (shorthand.w !== undefined) {
    styles.width = shorthand.w;
  }

  if (shorthand.h !== undefined) {
    styles.height = shorthand.h;
  }

  // Margins

  if (shorthand.m !== undefined) {
    styles.margin = shorthand.m;
  }

  if (shorthand.mb !== undefined) {
    styles.marginBottom = shorthand.mb;
  }

  if (shorthand.ml !== undefined) {
    styles.marginLeft = shorthand.ml;
  }

  if (shorthand.mr !== undefined) {
    styles.marginRight = shorthand.mr;
  }

  if (shorthand.mt !== undefined) {
    styles.marginTop = shorthand.mt;
  }

  if (shorthand.mx !== undefined) {
    styles.marginTop = shorthand.mx;
    styles.marginBottom = shorthand.mx;
  }

  if (shorthand.my !== undefined) {
    styles.marginLeft = shorthand.my;
    styles.marginRight = shorthand.my;
  }

  // Paddings

  if (shorthand.p !== undefined) {
    styles.padding = shorthand.p;
  }

  if (shorthand.pb !== undefined) {
    styles.paddingBottom = shorthand.pb;
  }

  if (shorthand.pl !== undefined) {
    styles.paddingLeft = shorthand.pl;
  }

  if (shorthand.pr !== undefined) {
    styles.paddingRight = shorthand.pr;
  }

  if (shorthand.pt !== undefined) {
    styles.paddingTop = shorthand.pt;
  }

  if (shorthand.px !== undefined) {
    styles.paddingLeft = shorthand.px;
    styles.paddingRight = shorthand.px;
  }

  if (shorthand.py !== undefined) {
    styles.paddingTop = shorthand.py;
    styles.paddingBottom = shorthand.py;
  }

  // Display and Flex

  if (shorthand.display !== undefined) {
    styles.display = shorthand.display;
  }

  if (shorthand.flexDirection !== undefined) {
    styles.flexDirection = shorthand.flexDirection;
  }

  if (shorthand.flex !== undefined) {
    styles.flex = shorthand.flex;
  }

  if (shorthand.flexWrap !== undefined) {
    styles.flexWrap = shorthand.flexWrap;
  }

  if (shorthand.justifyContent !== undefined) {
    styles.justifyContent = shorthand.justifyContent;
  }

  if (shorthand.alignItems !== undefined) {
    styles.alignItems = shorthand.alignItems;
  }

  if (shorthand.gap !== undefined) {
    styles.gap = shorthand.gap;
  }

  // Border

  if (shorthand.border !== undefined) {
    const [width, , color] = shorthand.border.split(" ");

    styles.borderWidth = parseFloat(width); // Convert "1px" to 1
    styles.borderColor = color;
  }

  if (shorthand.borderRadius !== undefined) {
    styles.borderRadius = shorthand.borderRadius;
  }

  //Color
  if (shorthand.bg !== undefined) {
    styles.backgroundColor = shorthand.bg;
  }

  // Misc
  if (shorthand.textAlign !== undefined) {
    // @ts-ignore - textAlign is not defined on ViewStyle but will be split out
    styles.textAlign = shorthand.textAlign;
  }

  return styles;
};
