module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(.*-)?react-(.*-)?native(-.*)?)'
  ],
  coverageDirectory: './coverage/',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/test/',
    'src/utils/Styles',
    'src/utils/Icons',
  ],
  collectCoverage: true,
  setupFiles: [
    './test/jestSetup.js'
  ],
  globals: {
    window: {},
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'ios.js',
    'ios.jsx',
    'android.js',
    'android.jsx'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/src/components/screen/__tests__/testHelpers.js',
  ],
  'cacheDirectory': '.jest/cache',
};
