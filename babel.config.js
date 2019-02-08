module.exports = {
  'presets': ['module:metro-react-native-babel-preset', '@babel/flow'],
  'plugins': [
    [
      '@babel/plugin-proposal-decorators',
      {
        'legacy': true
      }
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        'helpers': true,
        'regenerator': false
      }
    ]
  ]
};
