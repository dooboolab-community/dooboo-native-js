import 'react-native';
import * as React from 'react';
import Temp from '../Temp';
import Button from '../../shared/Button';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

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
  let rendered: ReactTestRenderer;
  let root: ReactTestInstance | any;
  const component = <Temp {...props} />;

  beforeEach(() => {
    rendered = renderer.create(component);
    root = rendered.root;
  });

  it('Simulate onClick', () => {
    // const spy = jest.spyOn(rendered.getInstance(), 'onClick');
    const button = root.findByType(Button);
    button.props.onClick();
    expect(props.navigation.goBack).toHaveBeenCalled();
  });
});
