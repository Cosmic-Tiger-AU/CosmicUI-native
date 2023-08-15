import React from "react";
import { Text as NativeText, TextProps } from "react-native";
import withCs, { CosmicProps, getColor, getFont } from "~/util/withCs";
import { useTheme } from "./CosmicProvider";

const BasicText = withCs<TextProps>(NativeText);

const Text = React.forwardRef<
  React.ElementRef<typeof BasicText>,
  TextProps &
    CosmicProps<typeof NativeText> & {
      children: React.ReactNode;
    }
>(({ children, ...props }, ref) => {
  const theme = useTheme();
  props.style = [
    {
      color: getColor(theme, props.color),
      fontSize: props.cs?.fontSize || 16,
      fontFamily: getFont(theme, props.weight),
    },
    props.style,
  ];

  return (
    <BasicText ref={ref} {...props}>
      {children}
    </BasicText>
  );
});
export default Text;
