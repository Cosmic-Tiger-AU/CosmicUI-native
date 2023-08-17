import React from "react";
import { TextInput as BaseTextInput, TextInputProps } from "react-native";
import { useTheme } from "./CosmicProvider";
import { ColorTypes, getColor } from "~/types/color-types";
import { CosmicTextStyle } from "~/types/cosmic-text-style";
import withTextStyle, { CosmicTextProps } from "~/util/withTextStyle";

const StyledTextInput = withTextStyle<TextInputProps>(BaseTextInput);

export type CosmicTextInputProps = CosmicTextProps<TextInputProps> & {
  style?: CosmicTextStyle;
  cursorColor?: ColorTypes;
  placeholderTextColor?: ColorTypes;
  selectionColor?: ColorTypes;
} & React.RefAttributes<any>;

const TextInput = React.forwardRef<
  React.ElementRef<typeof StyledTextInput>,
  TextInputProps & CosmicTextInputProps
>(({ ...props }, ref) => {
  const theme = useTheme();

  const cursorColor = getColor(theme, props.cursorColor || "primary");
  const placeholderTextColor = getColor(
    theme,
    props.placeholderTextColor || "lightGray"
  );
  const selectionColor = getColor(theme, props.selectionColor || "primary");

  const colorProps = { cursorColor, placeholderTextColor, selectionColor };

  return <StyledTextInput ref={ref} {...props} {...colorProps} />;
});

export default TextInput;
