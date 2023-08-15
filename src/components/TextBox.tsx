import { TextInput, TextInputProps } from "react-native";
import withCs, { CosmicProps, getColor, getFont } from "~/util/withCs";
import { useTheme } from "./CosmicProvider";
import React from "react";
import { mergeStyles } from "..";

const BasicTextbox = withCs<TextInputProps>(TextInput);

const Textbox = React.forwardRef<
  React.ElementRef<typeof BasicTextbox>,
  TextInputProps & CosmicProps<TextInputProps>
>(({ ...props }, ref) => {
  const theme = useTheme();
  const mergedStyle = mergeStyles(props.style, {
    color: getColor(theme, props.color),
    fontSize: props.cs?.fontSize || 16,
    fontFamily: getFont(theme, props.weight),
  });

  return <BasicTextbox ref={ref} {...props} style={mergedStyle} />;
});

export default Textbox;
