import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { colors } from '../../utils/Styles';
import IntroScreen from '../screen/Intro';
import TempScreen from '../screen/Temp';

const routeConfig = {
  Intro: {
    screen: IntroScreen,
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
    path: 'intro',
  },
  Temp: {
    screen: TempScreen,
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
        headerTitle: <Text style={{
          fontSize: 18,
        }}>Temp</Text>,
        headerTitleStyle: { color: theme.fontColor },
        headerTintColor: 'white',
      });
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
};

const RootStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

export default RootStackNavigator;
