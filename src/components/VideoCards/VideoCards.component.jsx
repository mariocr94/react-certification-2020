import React from 'react';
import {Cards} from './styled';
import VideoCard from './VideoCard';
import PropTypes from 'prop-types';
import useYoutubeApi from '../../hooks/useYoutubeApi';

const VideoCards = ({videoSearch}) => {
    const [searchVideos] = useYoutubeApi(videoSearch);


    const cardsArray = searchVideos?.map((video) =>
                                <VideoCard 
                                key={video.etag} 
                                id={video.id.videoId}
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
    videoSearch: PropTypes.string.isRequired
}

export default VideoCards;