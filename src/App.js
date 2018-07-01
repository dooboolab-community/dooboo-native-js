// import { observer } from 'mobx-react/native';
import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Dimensions, AsyncStorage, Alert } from 'react-native';
import RootStackNavigator from './components/navigation/RootStackNavigator';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RootStackNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
});

export default App;
