import { AppRegistry } from 'react-native';
import App from './src/App';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  // 'Warning: componentWillMount is deprecated',
  // 'Warning: isMounted',
  'Warning: RCTCxxModule was not exported',
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader'
]);

AppRegistry.registerComponent('ReactNativeJs', () => App);
