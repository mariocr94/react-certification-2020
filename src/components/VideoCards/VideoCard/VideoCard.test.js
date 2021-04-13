import React from 'react';
import {render, screen} from '@testing-library/react';
import {items} from '../../../mockFile/mockFile.json';
import VideoCard from './index';

describe('VideoCard Component', () => {
    test('renders 1st video of mockfile in VideoCard', () => {
        render(<VideoCard 
            key={items[1].etag} 
            title={items[1].snippet.title}
            description={items[1].snippet.description}
            thumbnail={items[1].snippet.thumbnails}/>);
    
            const title = screen.getByTestId('Videocard');
        
    
            expect(title).toBeInTheDocument();
    });
});
