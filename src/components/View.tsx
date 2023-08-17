import { View as BaseView, ViewProps } from "react-native";
import withViewStyle from "~/util/withViewStyle";

const View = withViewStyle<ViewProps>(BaseView);

export default View;
