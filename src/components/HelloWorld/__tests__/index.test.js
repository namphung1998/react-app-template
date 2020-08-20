import React from 'react';
import { render } from '@testing-library/react';

import HelloWorld from '../index';

describe('<HelloWorld />', () => {
  let helloWorld;
  beforeEach(() => {
    helloWorld = render(<HelloWorld />);
  });

  it('should render an <h1>', () => {
    expect(helloWorld.container.querySelector('h1')).toBeDefined();
  });
});
