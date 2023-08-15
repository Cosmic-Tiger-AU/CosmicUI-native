/**
 * Merges react styles
 * @param styles - react styles
 * @returns styles that are not undefined
 */
export const mergeStyles = (...styles: any[]) => {
  return styles.filter((style) => style !== undefined);
};
