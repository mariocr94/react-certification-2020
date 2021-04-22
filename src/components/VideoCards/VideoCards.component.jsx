import React from 'react';
import {Cards} from './styled';
import VideoCard from '../VideoCard';
import PropTypes from 'prop-types';
import useYoutubeApi from '../../hooks/useYoutubeApi';
import { Link } from 'react-router-dom';

const VideoCards = ({videoSearch}) => {
    const [searchVideos] = useYoutubeApi(videoSearch);

    const cardsArray = searchVideos?.map((video) =>
                                <Link key={video.etag} to={`/${video.id.videoId}`}>
                                    <VideoCard 
                                    videoId={video.id.videoId}
                                    data-testid="Videocard"/>
                                </Link>
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