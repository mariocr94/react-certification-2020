import React from 'react';
import FavVideo from '../FavVideo';
import { useAppContext } from '../../context/AppProvider';
import Styled from './styled';

const FavouritesView = () => {
    const { state } = useAppContext();
    const { favourites } = state;

    const videoArray = favourites?.map((video) => 
                                <FavVideo 
                                key={video} 
                                videoId={video}/>
                            );

    return (
        <Styled.Cards>
            {videoArray}
        </Styled.Cards>
    )
}

export default FavouritesView;