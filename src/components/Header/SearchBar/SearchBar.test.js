import React from 'react';
import {render, screen} from '@testing-library/react';
import SearchBar from './index';

test('renders SearchBar', () => {
    render(<SearchBar />);

    const title = screen.getByPlaceholderText(/Search.../i);

    expect(title).toBeInTheDocument();
});