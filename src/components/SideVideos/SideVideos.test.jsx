import React from 'react';
import { screen, render, act } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import SideVideos from './index';
import mockData from '../../mockVideos';

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
  // it('should render several sideVideos', () => {
  //   const history = createMemoryHistory();
  //   act(() => {
  //     render(
  //       <Router history={history}>
  //         <SideVideos videoIds={mockData.items} linkTo="/" />
  //       </Router>
  //     );
  //   });
  //   const videoCards = screen.getAllByTestId('SmallVideoCard');
  //   expect(videoCards.length).toBeGreaterThanOrEqual(16);
  // });
});
