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
import { AppProvider as Provider, AppConsumer, AppContext } from '../../providers';

import styled from 'styled-components/native';

import { ratio, colors } from '../../utils/Styles';
import { IC_MASK } from '../../utils/Icons';
import { getString } from '../../../STRINGS';
import Button from '../shared/Button';

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  overflow: scroll;
  background-color: ${({ theme }) => theme.background};

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
  color: ${({ theme }) => theme.fontColor};
`;

type Props = {
  store: any;
  navigation: NavigationScreenProp<NavigationStateRoute>;
};

type State = {
  isLoggingIn: boolean;
}

function Intro(props: Props) {
  let timer: any;
  const { state, dispatch } = React.useContext(AppContext);
  const [isLoggingIn, setIsLoggingIn] = React.useState(false);

  const onLogin = () => {
    dispatch({ type: 'reset-user' });
    setIsLoggingIn(true);
    timer = setTimeout(() => {
      const user: User = {
        displayName: 'dooboolab',
        age: 30,
        job: 'developer',
      };
      dispatch({ type: 'set-user', payload: user });
      setIsLoggingIn(false);
      clearTimeout(timer);
    }, 1000);
  };

  const changeTheme = () => {
    let payload;
    if (state.theme === 'LIGHT') {
      payload = {
        theme: 'DARK',
      };
    } else {
      payload = {
        theme: 'LIGHT',
      };
    }
    dispatch({
      type: 'change-theme-mode',
      payload,
    });
  };

  return (
    <Container>
      <ContentWrapper>
        <StyledText
          style={{
            marginTop: 100,
          }}
        >{state.user.displayName}</StyledText>
        <StyledText>{state.user.age ? state.user.age : ''}</StyledText>
        <StyledText>{state.user.job}</StyledText>
      </ContentWrapper>
      <ButtonWrapper>
        <Button
          testID='btn1'
          imgLeftSrc={IC_MASK}
          isLoading={isLoggingIn}
          onClick={() => onLogin()}
          text={getString('LOGIN')}
        />
        <View style={{ marginTop: 8 }}/>
        <Button
          testID='btn2'
          onClick={() => props.navigation.navigate('Temp') }
          text={getString('NAVIGATE')}
        />
        <View style={{ marginTop: 8 }}/>
        <Button
          testID='btn3'
          onClick={() => changeTheme() }
          text={getString('CHANGE_THEME')}
        />
      </ButtonWrapper>
    </Container>
  );
}

export default Intro;
