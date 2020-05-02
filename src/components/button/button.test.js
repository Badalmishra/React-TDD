import React from 'react';
import Button from './button';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Button label="Click Me"/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});