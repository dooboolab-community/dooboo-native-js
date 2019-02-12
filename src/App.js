import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Dimensions, AsyncStorage, Alert } from 'react-native';
import SwitchNavigator from './components/navigation/SwitchNavigator';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';
import { AppProvider as Provider } from './providers';

class App extends React.Component {
  render() {
    return (
      <Provider>
        <ThemeProvider theme={theme}>
          <SwitchNavigator />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
