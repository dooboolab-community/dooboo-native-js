import 'react-native';
import * as React from 'react';
import Temp from '../Temp';
import Button from '../../shared/Button';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { render, fireEvent } from 'react-native-testing-library';

const props = {
  navigation: {
    goBack: jest.fn(),
  },
};

describe('Temp', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Temp />).toJSON();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});

describe('Interaction', () => {
  const component = <Temp {...props} />;
  let rendered: ReactTestRenderer;
  let root: ReactTestInstance | any;
  let testingLib;

  beforeEach(() => {
    rendered = renderer.create(component);
    root = rendered.root;
    testingLib = render(component);
  });

  it('Simulate onClick', () => {
    // const spy = jest.spyOn(rendered.getInstance(), 'onClick');
    const button = root.findByType(Button);
    button.props.onClick();
    expect(props.navigation.goBack).toHaveBeenCalled();

    fireEvent(testingLib.getByTestId('btn'), 'click');
  });
});
