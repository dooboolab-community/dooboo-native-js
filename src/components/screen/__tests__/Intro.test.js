import 'react-native';
import * as React from 'react';
import Intro from '../Intro';
import Button from '../../shared/Button';
import appStore from '../../../stores/appStore';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

const props = {
  store: appStore,
  navigation: {
    navigate: jest.fn(),
  },
};

// test for the container page in dom
describe('Intro page DOM rendering test', () => {
  let tree;
  const component = <Intro { ...props } />;

  it('component and snapshot matches', () => {
    tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shallow renders match snapshot', () => {
    const shallow = new ShallowRenderer();
    const result = shallow.render(component);
    expect(result).toMatchSnapshot();
  });
});

describe('Interaction', () => {
  let rendered: TestRenderer.ReactTestRenderer;
  let root: TestRenderer.ReactTestRenderer.root;
  const component = <Intro { ...props } />;

  beforeAll(() => {
    rendered = renderer.create(component);
    root = rendered.root;
  });

  it('Simulate onClick', () => {
    jest.useFakeTimers();
    const spy = jest.spyOn(rendered.getInstance(), 'onLogin');
    const buttons = root.findAllByType(Button);
    root.instance.onLogin(); // == buttons[0].props.onPress();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(root.instance.state.isLoggingIn).toEqual(true);

    jest.runAllTimers();
    expect(root.instance.state.isLoggingIn).toEqual(false);
    expect(props.store.user.displayName).toEqual('dooboolab');
    expect(props.store.user.age).toEqual(30);
    expect(props.store.user.job).toEqual('developer');
    expect(spy).toBeCalled();
    buttons[1].props.onPress();
    expect(props.navigation.navigate).toBeCalledWith('Temp');
  });
});
