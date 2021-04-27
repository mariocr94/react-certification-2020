import React from 'react';
import { screen, render, act } from '@testing-library/react';
import SmallVideo from './index';

describe('SmallVideo Component', () => {
  it('should not render SmallVideo without videoId', () => {
    render(<SmallVideo videoId="" />);
    expect(screen.queryByTestId('SmallVideocard')).toBeNull();
  });
  //   it('should render SmallVideo with videoId', async () => {
  //     await act(async () => {
  //       render(<SmallVideo videoId="sOS9aOIXPEk" />);
  //     });
  //     expect(screen.queryByTestId('SmallVideocard')).toBeNull();
  //   });
});
