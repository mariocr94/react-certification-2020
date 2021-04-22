import React from 'react';
import VideoCard from '../VideoCard';
import Styled from './styled';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const VideoCards = ({ videoIds, linkTo }) => {

    const videoArray = videoIds?.map((videoId) => 
                            <Link key={videoId} to={`${linkTo}${videoId}`}>
                                <VideoCard 
                                videoId={videoId}/>
                            </Link>
                            );

    return (
        <Styled.CardsContainer>
            {videoArray}
        </Styled.CardsContainer>
    );
}

VideoCards.prototype = {
    videoIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    linkTo: PropTypes.string.isRequired
}

export default VideoCards;