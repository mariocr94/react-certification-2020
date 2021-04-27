import React from 'react';
import { screen, render } from '@testing-library/react';
import VideoCards from './index';

describe('VideoCards Component', () => {
  it('should render VideoCards', () => {
    render(<VideoCards />);
    expect(screen.getByTestId('Videocards')).toBeInTheDocument();
  });
});
