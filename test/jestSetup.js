import { NativeModules } from 'react-native';

window.Date = Date;

// console.error = (message) => {
//   if (!/(React.createElement: type should not be null)/.test(message)) {
//     throw new Error(message);
//   }
// };

/**
 * monkey patching the locale to avoid the error:
 * Something went wrong initializing the native ReactLocalization module
 * https://gist.github.com/MoOx/08b465c3eac9e36e683929532472d1e0
 */

NativeModules.ReactLocalization = {
  language: 'en_US',
};
