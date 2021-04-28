import React from 'react';
import { screen, render } from '@testing-library/react';
import VideoCards from './index';

jest.mock('../../hooks/useVideoInfo', () => ({
  __esModule: true,
  default: (videoId) => {
    if (videoId) return [`title ${videoId}`, 'description', 'thumb'];
    return ['', '', ''];
  },
}));
describe('VideoCards Component', () => {
  it('should render VideoCards', () => {
    render(<VideoCards />);
    expect(screen.getByTestId('Videocards')).toBeInTheDocument();
  });
});
