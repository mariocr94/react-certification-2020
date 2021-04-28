import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from './index';
import { AppContext } from '../../../context/AppProvider';

describe('SearchBar Component', () => {
  test('renders SearchBar', () => {
    render(<SearchBar />);
    const searchBox = screen.getByTestId('Searchbox');

    expect(searchBox).toBeInTheDocument();
  });

  it('input value', () => {
    render(<SearchBar />);
    const searchBox = screen.getByTestId('Inputbox');
    userEvent.type(searchBox, 'hello');
    expect(searchBox).toHaveValue('hello');
  });

  it('run dispatch when pressing enter', () => {
    const dispatch = jest.fn();
    render(
      <AppContext.Provider value={{ dispatch }}>
        <SearchBar />
      </AppContext.Provider>
    );
    const searchBox = screen.getByTestId('Inputbox');
    fireEvent.keyDown(searchBox, { keyCode: 13 });
    expect(dispatch).toHaveBeenCalled();
  });
});
