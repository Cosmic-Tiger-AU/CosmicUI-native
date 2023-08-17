import { TextInput as BaseTextInput, TextInputProps } from "react-native";
import withTextStyle from "~/util/withTextStyle";

const TextInput = withTextStyle<TextInputProps>(BaseTextInput);

export default TextInput;