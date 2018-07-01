/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';
import { getString } from '../../../STRINGS';
import { observer, inject } from 'mobx-react';

type Props = {
  navigation: any;
};
type State = {
  cnt: number;
}

@inject('store') @observer
class App extends Component<Props, State> {
  state = {
    cnt: 0,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.props.store.loading = true;
    // }, 3000);
  }

  render() {
    // if (!this.props.store.loading) {
    //   return (
    //     <Text>Loading</Text>
    //   );
    // }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {getString('HELLO')}
        </Text>
        <Button
          title='click'
          onPress={this.onClick}
        />
        <Text style={styles.instructions}>
          count: {this.state.cnt}{'\n'}
          this.props.store.cnt: {this.props.store.cnt}
        </Text>
      </View>
    );
  }

  onClick = () => {
    this.setState({
      cnt: this.state.cnt + 1,
    });
    this.props.store.cnt = this.props.store.cnt + 3;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
