import { TouchableOpacity as BaseTouchableOpacity, TouchableOpacityProps } from "react-native";
import withViewStyle from "~/util/withViewStyle";

const TouchableOpacity = withViewStyle<TouchableOpacityProps>(BaseTouchableOpacity);

export default TouchableOpacity;
