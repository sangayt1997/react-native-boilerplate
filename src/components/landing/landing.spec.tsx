import React from 'react';
import { render } from '@testing-library/react-native';
import Landing from './landing';

describe('Landing', () => {
  it('should render successfully', () => {
    const { container } = render(<Landing />);
    expect(container).toBeTruthy();
  });
});
