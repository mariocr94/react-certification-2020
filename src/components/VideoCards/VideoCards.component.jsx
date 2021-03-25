import React from 'react';
import {Cards} from './styled';
import VideoCard from './VideoCard';
import PropTypes from 'prop-types';

const VideoCards = ({filter, videos}) => {

    const cardsArray = videos?.slice(1).filter((filterItem) =>
                                filterItem.snippet.title.toLocaleLowerCase().includes(filter?.toLocaleLowerCase().trim())
                            ).map((video) =>
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
    filter: PropTypes.string,
    videos: PropTypes.array
}

export default VideoCards;