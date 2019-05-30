import { Text } from 'react-native';
import * as React from 'react';

import { ThemeProvider } from 'styled-components/native';

import { createTheme, ThemeType } from '../../../theme';
import Button from '../Button';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const component = (props?: any) => {
  return (
    <ThemeProvider theme={createTheme('LIGHT')}>
      <Button {...props}/>
    </ThemeProvider>
  );
};

describe('[Button]', () => {
  let rendered: TestRenderer.ReactTestRenderer;

  it('should render without crashing', () => {
    rendered = renderer.create(component());
    expect(rendered.toJSON()).toMatchSnapshot();
    expect(rendered.toJSON()).toBeTruthy();
  });

  describe('[Button] Interaction', () => {
    let root: TestRenderer.ReactTestRenderer.root;
    let cnt = 1;
    it('simulate onPress', () => {
      rendered = renderer.create(component({
        onClick: () => cnt++,
      }));
      root = rendered.root;

      root.findByType(Button).props.onClick();
      expect(cnt).toBe(2);
    });

    it('renders disabled', () => {
      rendered = renderer.create(component({ isDisabled: true }));
      root = rendered.root;

      const texts = root.findAllByType(Text);
      expect(texts).toHaveLength(1);
    });
  });
});
