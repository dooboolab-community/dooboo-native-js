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

const StyledText = styled.Text`
  font-size: 16;
  color: #333;
`;

type Props = {
}

type State = {
}

class Page extends Component<Props, State> {
  static navigationOptions = {
    headerTitle: <Text style={{
      fontSize: 18,
    }}>Temp</Text>,
  };

  render() {
    return (
      <Container>
        <StyledText>Temporary Page</StyledText>
      </Container>
    );
  }
}

export default Page;
