import 'react-native';
import * as React from 'react';
import Temp from '../Temp';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Temp', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Temp />).toJSON();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});
