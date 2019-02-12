import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Dimensions, AsyncStorage, Alert } from 'react-native';
import SwitchNavigator from './components/navigation/SwitchNavigator';

import { AppProvider as Provider } from './providers';

class App extends React.Component {
  render() {
    return (
      <Provider>
        <SwitchNavigator />
      </Provider>
    );
  }
}

export default App;
