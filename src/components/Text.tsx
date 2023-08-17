import { Text as BaseText, TextProps } from "react-native";
import withTextStyle from "~/util/withTextStyle";

const Text = withTextStyle<TextProps>(BaseText);

export default Text;
