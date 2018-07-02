import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { observer } from 'mobx-react/native';
import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';

import appStore from '../../stores/appStore';
import NavigationService from './NavigationService';
import IntroScreen from '../screen/Intro';
import NotFoundScreen from '../screen/NotFound';

@observer
class RootNavigator extends React.Component {
  state = {
    initScreen: 'Intro',
  };

  render() {
    const routeConfig = {
      Intro: {
        screen: IntroScreen,
        path: 'Intro',
      },
      NotFound: {
        screen: NotFoundScreen,
        path: 'NotFound',
      },
    };

    const navigatorConfig = {
      initialRouteName: this.state.initScreen,
      header: null,
      headerMode: 'none',
      gesturesEnabled: true,
      statusBarStyle: 'light-content',
      transitionConfig: () => ({ screenInterpolator:
        appStore.rootNavigatorActionHorizontal
          ? StackViewStyleInterpolator.forHorizontal
          : StackViewStyleInterpolator.forVertical,
      }),
    };

    const RootStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

    return (
      <RootStackNavigator
        ref={(v) => {
          if (v) {
            NavigationService.setTopLevelNavigator(v);
          }
        }}
      />
    );
  }
}

export default RootNavigator;
