import { TextStyle } from "react-native";
import { ColorTypes } from "./cosmic-styles";
import { FontTypes } from "./font-types";

/**
 * Represents the styles that can be applied to an element.
 */
export type CosmicTextStyle = TextStyle & {
  /**
   * Represents the font weight
   */
  fontWeight?: FontTypes | TextStyle["fontWeight"];

  /**
   * Represents the text color
   */
  color?: ColorTypes | string;

  /**
   * Represents the text decoration color
   */
  textDecorationColor?: ColorTypes | string;

  /**
   * Represents the text shadow color
   */
  textShadowColor?: ColorTypes | string;
};
