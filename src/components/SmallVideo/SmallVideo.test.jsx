import React from 'react';
import { screen, render, act } from '@testing-library/react';
import SmallVideo from './index';

jest.mock('../../hooks/useVideoInfo', () => ({
  __esModule: true,
  default: (videoId) => {
    if (videoId) return [`title ${videoId}`, 'description', 'thumb'];
    return ['', '', ''];
  },
}));
describe('SmallVideo Component', () => {
  it('should not render SmallVideo without videoId', () => {
    render(<SmallVideo videoId="" />);
    expect(screen.queryByTestId('SmallVideocard')).toBeNull();
  });
  it('should render SmallVideo with videoId', () => {
    act(() => {
      render(<SmallVideo videoId="sOS9aOIXPEk" />);
    });
    expect(screen.queryByTestId('SmallVideocard')).toBeInTheDocument();
    expect(screen.queryByText(/title sOS9aOIXPEk/)).toBeInTheDocument();
  });
});
