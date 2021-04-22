import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from './index';

describe('SearchBar Component', () => {
  test('renders SearchBar', () => {
    render(<SearchBar />);

    const title = screen.getByTestId('Searchbox');

    expect(title).toBeInTheDocument();
  });
});
