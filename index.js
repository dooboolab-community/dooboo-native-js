import { AppRegistry } from 'react-native';
import App from './src/App';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  // 'Warning: componentWillMount is deprecated',
  // 'Warning: isMounted',
  'Warning: isMounted(...) is deprecated',
  'Class RCTCxxModule',
  'Module RCTImageLoader'
]);

AppRegistry.registerComponent('ReactNativeJs', () => App);
