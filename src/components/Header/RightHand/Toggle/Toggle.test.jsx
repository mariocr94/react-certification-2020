import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Toggle from './index';
import 'jest-styled-components';
import AppProvider from '../../../../context/AppProvider';
import Layout from '../../../Layout';

describe('Toggle', () => {
  it('should render toggle', () => {
    render(<Toggle />);
    expect(screen.getByTestId('Toggle')).toBeInTheDocument();
  });

  it('should trigger theme toggle', () => {
    const history = createMemoryHistory();
    history.push('/');
    render(
      <AppProvider>
        <Router history={history}>
          <Layout>
            <Toggle />
          </Layout>
        </Router>
      </AppProvider>
    );
    const toggleLabel = screen.getByTestId('toggleLabel');
    const toggleButton = screen.getByTestId('Toggle');
    expect(toggleLabel).toHaveStyle('background: #555555');
    userEvent.click(toggleButton);
    expect(toggleLabel).toHaveStyle('background: lightgrey');
    userEvent.click(toggleButton);
    expect(toggleLabel).toHaveStyle('background: #555555');
  });
});
