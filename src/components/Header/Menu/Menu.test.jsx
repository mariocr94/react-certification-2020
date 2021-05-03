import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Menu from './index';

describe('Test menubox', () => {
  it('should render menu', () => {
    const history = createMemoryHistory();
    history.push('/');
    render(
      <Router history={history}>
        <Menu />
      </Router>
    );
    expect(screen.getByTestId('Menu')).toBeInTheDocument();
  });
});
