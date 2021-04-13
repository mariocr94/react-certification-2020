import React from 'react';
import {render, screen} from '@testing-library/react';
import {items} from '../../mockfile/mockFile.json';
import VideoCards from './index';

describe('Should render 25 cards', () => {

    test('renders VideoCards', () => {
        render(<VideoCards filter="" videos={items}/>);
        
        const title = screen.getByTestId('Videocards');
        
        expect(title).toBeInTheDocument();
    });

    test('Check length of array', () => {
        render(<VideoCards filter="" videos={items}/>);
    
        expect(screen.queryAllByTestId("Videocard")).toHaveLength(24);
    
    });

    test('Check filter with Guadalajara', () =>{
        render(<VideoCards filter="Guadalajara" videos={items}/>);
    
        expect(screen.queryAllByTestId("Videocard")).toHaveLength(2);
    })
    
});
