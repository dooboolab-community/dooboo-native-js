import 'react-native';
import * as React from 'react';
import { AppProvider } from '../AppProvider';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

let props = {
  navigation: {
    navigate: jest.fn(),
  },
};

describe('[AppProvider] rendering test', () => {
  let json: ReactTestRenderJSON;
  const component = <AppProvider { ...props } />;

  it('component and snapshot matches', () => {
    json = renderer.create(component).toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('[AppProvider] interactions', () => {
  let rendered: TestRenderer.ReactTestRenderer;
  let root: TestRenderer.ReactTestRenderer.root;
  const component = <AppProvider { ...props } />;

  const user = {
    displayName: 'dooboolab',
    age: 30,
    job: '',
  };

  beforeEach(() => {
    props = {
      navigation: {
        navigate: jest.fn(),
      },
    };
    rendered = renderer.create(component);
    root = rendered.root;
  });
  it('should check [resetUser] actions', () => {
    let instance = root.instance;
    instance.actions.resetUser();
  });

  it('should check trigger actions when method called', () => {
    let instance = root.instance;

    // let appMockFunc = {
    //   setUser: jest.fn(),
    //   open: jest.fn(),
    //   close: jest.fn(),
    //   showAddBtn: jest.fn(),
    // };
    // // ## got hint: 
    // // - https://github.com/airbnb/enzyme/issues/361#issuecomment-397334665
    // // - https://jestjs.io/docs/en/23.x/mock-functions#mocking-modules

    // let appElement = appWrapper.getElement();
    // appElement.ref(appMockFunc);
    // expect(instance.app).toBeTruthy();
    
    // const appSetUser = jest.spyOn(instance.app, 'setUser');
    // const appOpened = jest.spyOn(instance.app, 'open');
    // const appClosed = jest.spyOn(instance.app, 'close');
    // const appShowAddBtn = jest.spyOn(instance.app, 'showAddBtn');

    // appWrapper.props().onChatPressed();
    // expect(appClosed).toHaveBeenCalled();

    // instance.actions.showapp(friend, true);
    // expect(appSetUser).toHaveBeenCalled();
    // expect(appOpened).toHaveBeenCalled();
    // expect(appShowAddBtn).toHaveBeenCalled();
    // expect(instance.state.user).toEqual(friend);

    // instance.actions.setapp(null);
    // instance.actions.showapp(friend, true);
    // expect(instance.app).toBeFalsy();
  });
});
