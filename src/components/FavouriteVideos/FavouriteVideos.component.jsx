import React from 'react';
import FavSmallVideo from '../FavSmallVideo';
import { useAppContext } from '../../context/AppProvider';
import Styled from '../VideoView/styled';

const FavouriteVideos = () => {
    const { state } = useAppContext();
    const { favourites } = state;

    const videoArray = favourites?.map((video) => 
                                <FavSmallVideo 
                                key={video} 
                                videoId={video}/>
                            );

    return (
        <Styled.Videos>
            {videoArray}
        </Styled.Videos>
    );
}

export default FavouriteVideos