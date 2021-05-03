import React from 'react';
import { screen, render } from '@testing-library/react';
import VideoCard from './index';

jest.mock('../../hooks/useVideoInfo', () => ({
  __esModule: true,
  default: (videoId) => {
    if (videoId) return [`title ${videoId}`, 'description', 'thumb'];
    return ['', '', ''];
  },
}));
describe('VideoCard Component', () => {
  it('should render VideoCard', () => {
    render(<VideoCard videoId="" />);
    expect(screen.getByTestId('Videocard')).toBeInTheDocument();
  });
});
