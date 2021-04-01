import React from 'react';
import {Cards} from './styled';
import VideoCard from './VideoCard';
import PropTypes from 'prop-types';
import useYoutubeApi from '../../hooks/useYoutubeApi';

const VideoCards = ({query}) => {
    const [videos] = useYoutubeApi(query)

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
    query: PropTypes.string
}

export default VideoCards;