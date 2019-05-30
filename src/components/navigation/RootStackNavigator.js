import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { colors } from '../../utils/Styles';
import IntroScreen from '../screen/Intro';
import TempScreen from '../screen/Temp';

const routeConfig = {
  Intro: {
    screen: IntroScreen,
    navigationOptions: {
      title: 'Intro',
    },
    path: 'intro',
  },
  Temp: {
    screen: TempScreen,
    navigationOptions: {
      headerTitle: <Text style={{
        fontSize: 18,
      }}>Temp</Text>,
    },
    path: 'temp',
  },
};

const navigatorConfig = {
  initialRouteName: 'Intro',
  // header: null,
  // headerMode: 'none',
  gesturesEnabled: true,
  statusBarStyle: 'light-content',
  navigationOptions: ({ navigation, screenProps }) => {
    const { theme } = screenProps;
    return ({
      headerStyle: {
        headerBackTitle: null,
        backgroundColor: theme.background,
        borderBottomColor: 'transparent',
        borderBottomWidth: 0,
        elevation: 0,
      },
      headerTitleStyle: { color: theme.fontColor },
      headerTintColor: 'white',
    });
  },
};

const RootStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

class RootNavigator extends React.Component {
  static router = RootStackNavigator.router;

  render() {
    return (
      <RootStackNavigator
        navigation={this.props.navigation}
      />
    );
  }
}

export default RootNavigator;
