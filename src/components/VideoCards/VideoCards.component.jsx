import React from 'react';
import {Cards} from './styled';
import VideoCard from './VideoCard';
import PropTypes from 'prop-types';
import useYoutubeApi from '../../hooks/useYoutubeApi';

const VideoCards = ({videoId}) => {
    const [videos] = useYoutubeApi(videoId)


    const cardsArray = videos?.map((video) =>
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
    videoId: PropTypes.string,
    callBack: PropTypes.func
}

export default VideoCards;