import React from 'react';
import VideoCard from '../VideoCard';
import { useAppContext } from '../../context/AppProvider';
import Styled from './styled';
import { Link } from 'react-router-dom';

const FavouriteCards = () => {
    const { state } = useAppContext();
    const { favourites } = state;

    const videoArray = favourites?.map((video) => 
                            <Link key={video} to={`/favourites/${video}`}>
                                <VideoCard 
                                videoId={video}/>
                            </Link>
                            );

    return (
        <Styled.CardsContainer>
            {videoArray}
        </Styled.CardsContainer>
    );
}

export default FavouriteCards;