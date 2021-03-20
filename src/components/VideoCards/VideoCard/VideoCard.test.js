import React from 'react';
import {render, screen} from '@testing-library/react';
import {items} from '../../../mockFile/mockYoutube.json';
import VideoCard from './index';

test('renders 1st video of mockfile in VideoCard', () => {
    render(<VideoCard title={items[1]}/>);

    const title = screen.getByText(/Video Tour/i);

    expect(title).toBeInTheDocument();
});