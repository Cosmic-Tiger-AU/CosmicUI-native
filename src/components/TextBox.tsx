import { TextInput, TextInputProps } from "react-native";
import withCs, { CosmicProps, getColor, getFont } from "~/util/withCs";
import { useTheme } from "./CosmicProvider";
import React from "react";

const BasicTextbox = withCs<TextInputProps>(TextInput);

const Textbox = React.forwardRef<
  React.ElementRef<typeof BasicTextbox>,
  TextInputProps &
    //   typeof native next probably not correct due to missing props error when used
    CosmicProps<TextInputProps>
>(({ ...props }, ref) => {
  const theme = useTheme();
  const mergedStyle = [
    {
      color: getColor(theme, props.color),
      fontSize: props.cs?.fontSize || 16,
      fontFamily: getFont(theme, props.weight),
    },
    props.style,
  ];

  return <BasicTextbox ref={ref} {...props} style={mergedStyle} />;
});

export default Textbox;
