import React from 'react';
import { screen, render } from '@testing-library/react';
import VideoCard from './index';

describe('VideoCard Component', () => {
  it('should render VideoCard', () => {
    render(<VideoCard />);
    expect(screen.getByTestId('Videocard')).toBeInTheDocument();
  });
});
