export { default as View } from "./components/View";
export { default as Button } from "./components/TouchableOpacity";
export { ThemeProvider, useTheme } from "./components/CosmicProvider";
export { default as Text } from "./components/Text";
export { default as TextInput } from "./components/TextInput";
export { default as TouchableOpacity } from "./components/TouchableOpacity";
export { mergeStyles } from "./util/mergeStyles";

export type {
  ColorTypes,
  CosmicStyles,
  WeightTypes,
} from "./types/cosmic-styles";
export type { CosmicTextStyle } from "./types/cosmic-text-style";
export type { CosmicViewStyle } from "./types/cosmic-view-style";
export type { CosmicTheme } from "./types/cosmic-theme";
export type { CosmicTextInputProps } from "./components/TextInput";
