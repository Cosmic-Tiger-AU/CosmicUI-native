import { DimensionValue } from "react-native";

export type ColorTypes =
  | "primary"
  | "secondary"
  | "background"
  | "light"
  | "textPrimary"
  | "textSecondary";

export type WeightTypes = "light" | "regular" | "bold";

/**
 * Represents the styles that can be applied to an element.
 */
export type CosmicStyles = {
  /**
   * Width value for the element
   */
  w?: DimensionValue;

  /**
   * Represents the height value that can be applied to an element.
   */
  h?: DimensionValue;
  /**
   * Margin value for the cosmic element.
   */
  m?: DimensionValue;

  /**
   * Margin value for the bottom of the cosmic element.
   */
  mb?: DimensionValue;

  /**
   * Margin value for the left side of the cosmic element.
   */
  ml?: DimensionValue;

  /**
   * Margin value for the right side of the cosmic element.
   */
  mr?: DimensionValue;

  /**
   * Margin value for the top of the cosmic element.
   */
  mt?: DimensionValue;

  /**
   * Margin value for the left and right sides of the cosmic element.
   * Overrides ml and mr.
   */
  mx?: DimensionValue;

  /**
   * Margin value for the top and bottom sides of the cosmic element.
   * Overrides mt and mb.
   */
  my?: DimensionValue;

  /**
   * Padding value for the cosmic element.
   */
  p?: DimensionValue;

  /**
   * Padding value for the bottom of the cosmic element.
   */
  pb?: DimensionValue;

  /**
   * Padding value for the left side of the cosmic element.
   */
  pl?: DimensionValue;

  /**
   * Padding value for the right side of the cosmic element.
   */
  pr?: DimensionValue;

  /**
   * Padding value for the top of the cosmic element.
   */
  pt?: DimensionValue;

  /**
   * Padding value for the left and right sides of the cosmic element.
   * Overrides pl and pr.
   */
  px?: DimensionValue;

  /**
   * Padding value for the top and bottom sides of the cosmic element.
   * Overrides pt and pb.
   */
  py?: DimensionValue;

  /**
   * Determines how the container will display its children.
   * - `flex`: Container will act as a flex container.
   * - `none`: Container will not display its children.
   */
  display?: "flex" | "none";

  /**
   * Specifies the direction of the flexible items.
   * - `row`: Horizontal from left to right.
   * - `row-reverse`: Horizontal from right to left.
   * - `column`: Vertical from top to bottom.
   * - `column-reverse`: Vertical from bottom to top.
   */
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";

  /**
   * Controls whether the flexible container is single-lined or multi-lined.
   * - `nowrap`: Single-line, no wrapping.
   * - `wrap`: Multi-lined, may wrap.
   * - `wrap-reverse`: Multi-lined, may wrap in reverse.
   */
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";

  /**
   * Describes how to align the flexible container's items when there is extra space in the horizontal axis.
   * - `flex-start`: Items are grouped at the start.
   * - `flex-end`: Items are grouped at the end.
   * - `center`: Items are centered.
   * - `space-between`: Items are evenly distributed with the first item at the start and the last at the end.
   * - `space-around`: Items are evenly distributed with equal space around them.
   */
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";

  /**
   * Describes the default alignment for items inside the flexible container.
   * - `flex-start`: Items are placed at the start.
   * - `flex-end`: Items are placed at the end.
   * - `center`: Items are centered.
   * - `baseline`: Items are aligned by their baselines.
   * - `stretch`: Items are stretched to fit the container.
   */
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";

  /**
   * Represents the ability of a flex item to alter its dimensions and fill available space.
   */
  flex?: number;

  /**
   * Gap of the flex container children.
   */
  gap?: number;

  /**
   * Represents the border property, which can take values like.
   * @example "1px solid black"
   */
  border?: string;

  /**
   * Represents the radius of the border, in pixels.
   */
  borderRadius?: number;

  /**
   * Represents the color of the element, usually font color.
   */
  color?: ColorTypes | string;

  /**
   * Represents the background color
   */
  bg?: ColorTypes | string;

  /**
   * Represents the font family of the element.
   */
  fontFamily?: string;

  /**
   * Represents the font size in pixels
   */
  fontSize?: number;

  /**
   * Set text align
   */
  textAlign?: "left" | "right" | "center" | "justify";
};
