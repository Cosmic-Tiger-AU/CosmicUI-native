import { ViewStyle } from "react-native";
import { ColorTypes } from "./cosmic-styles";

/**
 * Represents the styles that can be applied to an element.
 */
export type CosmicViewStyle = ViewStyle & {
  /**
   * Represents the background color
   */
  backgroundColor?: ColorTypes | string;

  /**
   * Represents the border bottom color
   */
  borderBottomColor?: ColorTypes | string;

  /**
   * Represents the border color
   */
  borderColor?: ColorTypes | string;

  /**
   * Represents the border end color
   */
  borderEndColor?: ColorTypes | string;

  /**
   * Represents the border left color
   */
  borderLeftColor?: ColorTypes | string;

  /**
   * Represents the border right color
   */
  borderRightColor?: ColorTypes | string;

  /**
   * Represents the border start color
   */
  borderStartColor?: ColorTypes | string;

  /**
   * Represents the border top color
   */
  borderTopColor?: ColorTypes | string;
};
