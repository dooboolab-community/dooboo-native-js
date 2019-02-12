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

import styled from 'styled-components/native';
import { device } from '../../theme';

import { AppConsumer } from '../../providers/AppProvider';
import { ratio, colors } from '../../utils/Styles';
import { IC_MASK } from '../../utils/Icons';
import { getString } from '../../../STRINGS';
import Button from '../shared/Button';

// background-color: ${(props) => props.theme.background};
const Container = styled.View`
  flex: 1;
  align-self: stretch;
  overflow: scroll;
  background-color: rgb(12, 157, 197);

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

const ContentWrapper = styled.View`
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

const ButtonWrapper = styled.View`
  position: absolute;
  flex-direction: column;
  bottom: 40;
  width: 85%;
  align-self: center;
`;

const StyledText = styled.Text`
  font-size: 18;
  line-height: 27;
  color: white;
`;

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
              <Container>
                <ContentWrapper>
                  <StyledText
                    style={{
                      marginTop: 100,
                    }}
                  >{data.state.user.displayName}</StyledText>
                  <StyledText>{data.state.user.age ? data.state.user.age : ''}</StyledText>
                  <StyledText>{data.state.user.job}</StyledText>
                </ContentWrapper>
                <ButtonWrapper>
                  <Button
                    id='btn'
                    imgLeftSrc={IC_MASK}
                    isLoading={this.state.isLoggingIn}
                    onClick={() => this.onLogin(data)}
                    // white={true}
                    text={getString('LOGIN')}
                  />
                  <Button
                    id='btn'
                    style={{ marginTop: 8 }}
                    onClick={() => this.props.navigation.navigate('Temp') }
                    white={true}
                    text={getString('NAVIGATE')}
                  />
                </ButtonWrapper>
              </Container>
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
