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

import styled from 'styled-components/native';

import Button from '../shared/Button';
import { ratio } from '../../utils/Styles';
import {
  IC_MASK,
} from '../../utils/Icons';

const Container = styled.View`
  flex: 1;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

type Props = {
  navigation: any;
}

type State = {
}

function Page(props: Props, state: State) {
  return (
    <Container>
      <Button
        id='btn'
        onClick={() => props.navigation.goBack()}
        text='Go Back'
        style={{
          backgroundColor: '#333333',
        }}
      />
    </Container>
  );
}

export default Page;
