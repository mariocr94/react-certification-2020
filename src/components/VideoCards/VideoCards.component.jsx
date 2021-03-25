import React from 'react';
import {Cards} from './styled';
import VideoCard from './VideoCard';
import PropTypes from 'prop-types';

const VideoCards = ({videos}) => {
    const cardsArray = videos?.map((video) =>
                                <VideoCard 
                                key={video.etag} 
                                title={video.snippet.title}
                                description={video.snippet.description}
                                thumbnail={video.snippet.thumbnails}
                                data-testid="Videocard"/>
                            );

    return (
            <Cards data-testid="Videocards">
                {cardsArray}                
            </Cards>
    );
}

VideoCards.propTypes ={
    videos: PropTypes.array
}

export default VideoCards;