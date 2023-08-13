/**
 * Represents the styles that can be applied to a ship element.
 */
export type CosmicStyles = {
  /**
   * Margin value for the ship element.
   */
  m?: number;

  /**
   * Margin value for the bottom of the ship element.
   */
  mb?: number;

  /**
   * Margin value for the left side of the ship element.
   */
  ml?: number;

  /**
   * Margin value for the right side of the ship element.
   */
  mr?: number;

  /**
   * Margin value for the top of the ship element.
   */
  mt?: number;

  /**
   * Margin value for the left and right sides of the ship element.
   * Overrides ml and mr.
   */
  mx?: number;

  /**
   * Margin value for the top and bottom sides of the ship element.
   * Overrides mt and mb.
   */
  my?: number;

  /**
   * Padding value for the ship element.
   */
  p?: number;

  /**
   * Padding value for the bottom of the ship element.
   */
  pb?: number;

  /**
   * Padding value for the left side of the ship element.
   */
  pl?: number;

  /**
   * Padding value for the right side of the ship element.
   */
  pr?: number;

  /**
   * Padding value for the top of the ship element.
   */
  pt?: number;

  /**
   * Padding value for the left and right sides of the ship element.
   * Overrides pl and pr.
   */
  px?: number;

  /**
   * Padding value for the top and bottom sides of the ship element.
   * Overrides pt and pb.
   */
  py?: number;
};
