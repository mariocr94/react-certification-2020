import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import SearchBar from './index';

beforeEach(() => render(<SearchBar />));

describe('SearchBar Component', () => {
  test('renders SearchBar', () => {
    const searchBox = screen.getByTestId('Searchbox');

    expect(searchBox).toBeInTheDocument();
  });

  it('input value', () => {
    const searchBox = screen.getByTestId('Inputbox');
    userEvent.type(searchBox, 'hello');
    expect(searchBox).toHaveValue('hello');
  });
});
