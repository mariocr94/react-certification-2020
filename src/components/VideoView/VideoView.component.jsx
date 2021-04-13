import React from 'react';
import PropTypes from 'prop-types';
import {Container} from './styled';
import Video from './Video';
import RelatedVideos from './RelatedVideos';

const VideoView = ({videoId}) => {
    
    return (
        <Container >
            <Video videoId={videoId}/>
            <RelatedVideos videoId={videoId}/>
        </Container>
    )
}

VideoView.propTypes = {
    videoId: PropTypes.string
}

export default VideoView;