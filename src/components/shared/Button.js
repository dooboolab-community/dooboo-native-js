// @flow
import React, { Component } from 'react';
import styled from 'styled-components/native';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
} from 'react-native';
import type {
  ____ViewStyleProp_Internal as ViewStyle,
  ____TextStyleProp_Internal as TextStyle,
  ____ImageStyleProp_Internal as ImageStyle,
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import { ratio, colors } from '../../utils/Styles';

const StyledButton = styled.View`
  background-color: transparent;
  align-self: center;
  border-radius: 4;
  border-width: 2;
  width: 320;
  height: 52;
  border-color: white;

  align-items: center;
  justify-content: center;
`;

const StyledButtonDisabled = styled.View`
  background-color: rgb(243,243,243);
  align-self: center;
  border-radius: 4;
  border-width: 2;
  width: 320;
  height: 52;
  border-color: #333;

  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 14;
  color: white;
`;

const StyledImage = styled.Image`
  width: 24;
  height: 24;
  position: absolute;
  left: 16;
`;

type Props = {
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  style?: ViewStyle;
  disabledStyle?: ViewStyle;
  textStyle?: TextStyle;
  imgLeftSrc?: any;
  imgLeftStyle?: ImageStyle;
  indicatorColor?: string;
  activeOpacity?: number;
  text?: string;
}

type State = {

}

class Button extends Component<Props, State> {
  static defaultProps: Props = {
    isLoading: false,
    isDisabled: false,
    indicatorColor: 'white',
    activeOpacity: 0.5,
  };

  render() {
    if (this.props.isDisabled) {
      return (
        <StyledButtonDisabled style={this.props.disabledStyle}>
          <StyledText style={this.props.textStyle}>{this.props.text}</StyledText>
        </StyledButtonDisabled>
      );
    }
    if (this.props.isLoading) {
      return (
        <StyledButton style={this.props.style}>
          <ActivityIndicator size='small' color={this.props.indicatorColor} />
        </StyledButton>
      );
    }
    return (
      <TouchableOpacity
        activeOpacity={this.props.activeOpacity}
        onPress={this.props.onClick}
      >
        <StyledButton style={this.props.style}>
          {
            this.props.imgLeftSrc
              ? <StyledImage
                style={this.props.imgLeftStyle}
                source={this.props.imgLeftSrc}
              />
              : null
          }
          <StyledText style={this.props.textStyle}>{this.props.text}</StyledText>
        </StyledButton>
      </TouchableOpacity>
    );
  }
}

export default Button;
