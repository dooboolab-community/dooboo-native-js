// @flow
import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ScrollView,
  Text,
  View,
  FlatList,
  InteractionManager,
} from 'react-native';
import { NavigationScreenProp, NavigationStateRoute } from 'react-navigation';

import type {
  ____ViewStyleProp_Internal as ViewStyle,
  ____TextStyleProp_Internal as TextStyle,
  ____ImageStyleProp_Internal as ImageStyle,
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import type {
  User,
} from '../../types';
import type { State as AppState } from '../../providers/AppProvider';

import { AppConsumer } from '../../providers/AppProvider';
import { ratio, colors } from '../../utils/Styles';
import { IC_MASK } from '../../utils/Icons';
import { getString } from '../../../STRINGS';
import Button from '../shared/Button';

type Style = {
  container: ViewStyle,
  titleTxt: TextStyle,
  txtLogin: ViewStyle,
  imgBtn: ImageStyle,
  viewUser: ViewStyle,
  txtUser: TextStyle,
  btnBottomWrapper: ViewStyle,
  btnLogin: ViewStyle,
  btnNavigate: ViewStyle,
};

const styles: Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleTxt: {
    marginTop: 100,
    color: colors.dusk,
    fontSize: 24,
  },
  txtLogin: {
    fontSize: 14,
    color: 'white',
  },
  imgBtn: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 16,
  },
  viewUser: {
    marginTop: 80,
    alignItems: 'center',
  },
  txtUser: {
    fontSize: 16,
    color: colors.dusk,
    lineHeight: 48,
  },
  btnBottomWrapper: {
    position: 'absolute',
    bottom: 40,
  },
  btnLogin: {
    backgroundColor: colors.dodgerBlue,
    alignSelf: 'center',
    borderRadius: 4,
    width: 320,
    height: 52,

    alignItems: 'center',
    justifyContent: 'center',
  },
  btnNavigate: {
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 4,
    width: 320,
    height: 52,

    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Props = {
  store: any;
  navigation: NavigationScreenProp<NavigationStateRoute>;
};
type State = {
  isLoggingIn: boolean;
}

class Page extends Component<Props, State> {
  timer: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      isLoggingIn: false,
    };
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    return (
      <AppConsumer>
        {
          (data) => {
            return (
              <View style={styles.container}>
                <Text style={styles.titleTxt}>DOOBOO NATIVE</Text>
                <View style={styles.viewUser}>
                  <Text style={styles.txtUser}>{data.state.user.displayName}</Text>
                  <Text style={styles.txtUser}>{data.state.user.age ? data.state.user.age : ''}</Text>
                  <Text style={styles.txtUser}>{data.state.user.job}</Text>
                </View>
                <View style={styles.btnBottomWrapper}>
                  <Button
                    isLoading={this.state.isLoggingIn}
                    onPress={() => this.onLogin(data)}
                    style={styles.btnLogin}
                    textStyle={styles.txtLogin}
                    imgLeftSrc={IC_MASK}
                    imgLeftStyle={styles.imgBtn}
                  >{getString('LOGIN')}</Button>
                  <Button
                    onPress={() => this.props.navigation.navigate('Temp') }
                    style={[
                      styles.btnNavigate,
                      {
                        marginTop: 15,
                      },
                    ]}
                    textStyle={{
                      color: colors.dodgerBlue,
                    }}
                  >Navigate</Button>
                </View>
              </View>
            );
          }
        }
      </AppConsumer>
    );
  }

  onLogin = (data: AppState) => {
    data.actions.resetUser();
    this.setState({ isLoggingIn: true }, () => {
      this.timer = setTimeout(() => {
        const user: User = {
          displayName: 'dooboolab',
          age: 30,
          job: 'developer',
        };
        data.actions.setUser(user);
        this.setState({ isLoggingIn: false });
      }, 1000);
    });
  }
}

export default Page;
