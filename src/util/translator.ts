import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { ShipStyles } from '~/types/ship-styles';

/**
 * Converts shorthand style properties to React Native styles.
 *
 * @param shorthand - The shorthand style object of type ShipStyles.
 * @returns The converted React Native styles of type T (ViewStyle, TextStyle, ImageStyle).
 */
export const translateShipStyles = <
  T extends ViewStyle | TextStyle | ImageStyle,
>(
  shorthand?: ShipStyles
): Partial<T> => {
  if (!shorthand) {
    return {};
  }

  const styles = {} as T;

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

  return styles;
};
