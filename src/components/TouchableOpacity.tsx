import {
  TouchableOpacity as NativeTouch,
  TouchableOpacityProps,
} from 'react-native';
import withCs from '~/util/withCs';

const TouchableOpacity = withCs<TouchableOpacityProps>(NativeTouch);

export default TouchableOpacity;
