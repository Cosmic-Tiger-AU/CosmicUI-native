import { TextProps, Text as NativeText } from 'react-native';
import withCs from '~/util/withCs';

const Text = withCs<TextProps>(NativeText);

export default Text;
