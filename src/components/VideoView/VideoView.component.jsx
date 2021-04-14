import React from 'react';
import {Container} from './styled';
import Video from './Video';
import RelatedVideos from './RelatedVideos';

const VideoView = () => {
    
    return (
        <Container >
            <Video />
            <RelatedVideos />
        </Container>
    )
}


export default VideoView;