import React from "react";
import { Text as NativeText, TextProps } from "react-native";
import withCs, { CosmicProps, getColor, getFont } from "~/util/withCs";
import { useTheme } from "./CosmicProvider";

const BasicText = withCs<TextProps>(NativeText);

const Text = React.forwardRef<
  React.ElementRef<typeof BasicText>,
  TextProps &
    //   typeof native next probably not correct due to missing props error when used
    CosmicProps<TextProps> & {
      children: React.ReactNode;
    }
>(({ children, ...props }, ref) => {
  const theme = useTheme();
  const finalStyle = [
    {
      color: getColor(theme, props.color),
      fontSize: props.cs?.fontSize || 16,
      fontFamily: getFont(theme, props.weight),
    },
    props.style,
  ];

  return (
    <BasicText ref={ref} {...props} style={finalStyle}>
      {children}
    </BasicText>
  );
});
export default Text;
