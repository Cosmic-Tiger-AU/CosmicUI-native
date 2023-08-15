import { TextInput, TextInputProps } from "react-native";
import withCs, { CosmicProps, getColor, getFont } from "~/util/withCs";
import { useTheme } from "./CosmicProvider";
import React from "react";

const BasicTextbox = withCs<TextInputProps>(TextInput);

const Textbox = React.forwardRef<
  HTMLInputElement,
  TextInputProps &
    CosmicProps<typeof TextInput> & {
      children: React.ReactNode;
    }
>((props, ref) => {
  const theme = useTheme();
  const mergedStyle = [
    {
      color: getColor(theme, props.color),
      fontSize: props.cs?.fontSize || 16,
      fontFamily: getFont(theme, props.weight),
    },
    props.style,
  ];

  return (
    <BasicTextbox {...props} ref={ref} style={mergedStyle}>
      {props.children}
    </BasicTextbox>
  );
});

export default Textbox;
