import React from 'react';
import { screen, render } from '@testing-library/react';
import App from './index';

describe('App Component', () => {
  it('should render App Component', () => {
    render(<App />);
    expect(screen.queryByText(/look for something/i)).toBeInTheDocument();
  });
});
