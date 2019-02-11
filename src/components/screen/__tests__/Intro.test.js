import 'react-native';
import * as React from 'react';
import { AppProvider } from '../../../providers';
import Intro from '../Intro';
import Button from '../../shared/Button';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const component = (
  <AppProvider>
    <Intro />
  </AppProvider>
);

let props = {
  navigation: {
    navigate: jest.fn(),
  },
};


// test for the container page in dom
describe('[Intro] screen rendering test', () => {
  let json;

  it('should render outer component and snapshot matches', () => {
    json = renderer.create(component).toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('[Intro] Interaction', () => {
  let rendered: TestRenderer.ReactTestRenderer;
  let root: TestRenderer.ReactTestRenderer.root;

  beforeAll(() => {
    rendered = renderer.create(component);
    root = rendered.root;
  });

  it('should simulate onClick', () => {
    jest.useFakeTimers();
    let instance = rendered.getInstance();
    let children = instance.props.children;

    // const spy = jest.spyOn(instance, 'onLogin');
    const buttons = root.findAllByType(Button);
    buttons[0].props.onPress();
    expect(setTimeout).toHaveBeenCalledTimes(1);

    jest.runAllTimers();
    // expect(instance.state.isLoggingIn).toEqual(false);
    expect(instance.state.user.displayName).toEqual('dooboolab');
    expect(instance.state.user.age).toEqual(30);
    expect(instance.state.user.job).toEqual('developer');
    // expect(spy).toBeCalled();
    // buttons[1].props.onPress();
    // expect(props.navigation.navigate).toBeCalledWith('Temp');
  });
});
