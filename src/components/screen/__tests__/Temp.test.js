import 'react-native';
import * as React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { render, fireEvent } from 'react-native-testing-library';

import { createTheme } from '../../../theme';
import Temp from '../Temp';
import Button from '../../shared/Button';

const props = {
  navigation: {
    goBack: jest.fn(),
  },
};

const component = (
  <ThemeProvider theme={createTheme()}>
    <Temp {...props} />
  </ThemeProvider>
);

describe('[Temp] render', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(component).toJSON();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});

describe('[Temp] Interaction', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(component);
  });

  it('should simulate [onClick] when [btn] has been clicked', () => {
    const btnInstance: ReactTestInstance = renderResult.getByTestId('btn');
    fireEvent(btnInstance, 'click');
    expect(props.navigation.goBack).toHaveBeenCalled();
  });
});
