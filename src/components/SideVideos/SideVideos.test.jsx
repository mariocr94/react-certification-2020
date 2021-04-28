import React from 'react';
import { screen, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import SideVideos from './index';
import mockData from '../../mockVideos';

jest.mock('../../hooks/useVideoInfo', () => ({
  __esModule: true,
  default: (videoId) => {
    if (videoId) return [`title ${videoId}`, 'description', 'thumb'];
    return ['', '', ''];
  },
}));
describe('SideVideos Component', () => {
  it('should render sideVideos Component', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <SideVideos />
      </Router>
    );
    expect(screen.getByTestId('sideVideos')).toBeInTheDocument();
  });
  it('should render several sideVideos', () => {
    const history = createMemoryHistory();
    const videoIds = mockData.items.map((item) => item.videoId);
    render(
      <Router history={history}>
        <SideVideos videoIds={videoIds} linkTo="/" />
      </Router>
    );
    const videoCards = screen.getAllByTestId('SmallVideocard');
    expect(videoCards.length).toBeGreaterThanOrEqual(16);
  });
  it('should render several sideVideos', () => {
    const history = createMemoryHistory();
    const videoIds = mockData.items.map((item) => item.videoId);
    videoIds.push('undefined');
    render(
      <Router history={history}>
        <SideVideos videoIds={videoIds} linkTo="/" />
      </Router>
    );
    const videoCards = screen.getAllByTestId('SmallVideocard');
    expect(videoCards.length).toBeGreaterThanOrEqual(16);
  });
});
