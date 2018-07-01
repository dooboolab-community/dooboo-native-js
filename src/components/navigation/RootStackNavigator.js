import React from 'react';
import { createStackNavigator } from 'react-navigation';
import NavigationService from './NavigationService';
import HomeScreen from '../screen/Home';
import NotFoundScreen from '../screen/NotFound';

class RootNavigator extends React.Component {
  render() {
    const RootStackNavigator = createStackNavigator({
      Home: {
        screen: HomeScreen,
      },
      NotFound: {
        screen: NotFoundScreen,
      },
    });
    return (
      <RootStackNavigator
        ref={(v) => {
          if (v) {
            NavigationService.setTopLevelNavigator(v);
          }
        }}
        onNavigationStateChange={(prevState, currentState) => {
          this.getActiveRouteName(currentState);
        }}
      />
    );
  }
}

export default RootNavigator;
