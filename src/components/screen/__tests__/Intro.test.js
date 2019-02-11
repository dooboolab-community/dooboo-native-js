import 'react-native';
import * as React from 'react';
import { AppProvider } from '../../../providers';
import Intro from '../Intro';
import Button from '../../shared/Button';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { AppContext } from './testHelpers';

const props = {
  navigation: {
    navigate: jest.fn(),
  },
  history: {
    push: jest.fn(),
  },
  ...AppContext,
};

const component = (
  <AppProvider>
    <Intro {...props}/>
  </AppProvider>
);

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
  let instance;
  let children;

  beforeEach(() => {
    rendered = renderer.create(component);
    root = rendered.root;
    instance = rendered.getInstance();
    children = instance.props.children;
  });


  it('should simulate [onLogin] click', () => {
    jest.useFakeTimers();

    const intro = root.findByType(Intro);

    const spy = jest.spyOn(intro.instance, 'onLogin');
    const buttons = root.findAllByType(Button);
    intro.instance.onLogin(AppContext);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(intro.instance.state.isLoggingIn).toEqual(true);
    expect(spy).toBeCalled();

    jest.runAllTimers();
    expect(intro.instance.state.isLoggingIn).toEqual(false);
    expect(intro.instance.props.actions.setUser).toHaveBeenCalled();

    buttons[0].props.onClick();
  });

  it('should simulate [navigate] click', () => {
    const buttons = root.findAllByType(Button);
    buttons[1].props.onClick();
    expect(props.navigation.navigate).toBeCalledWith('Temp');
  });
});
