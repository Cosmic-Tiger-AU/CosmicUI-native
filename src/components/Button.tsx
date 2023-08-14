import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import withCs from "~/util/withCs";

const Button = withCs<TouchableOpacityProps>(TouchableOpacity);

export default Button;
