import React from 'react';
import PropTypes from 'prop-types';
import useVideoInfo from '../../../hooks/useVideoInfo';
import {Details, Text, Desc} from '../styled';

const Video = ({videoId}) => {
    const [title, description] = useVideoInfo(videoId);
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;

    return (
        <Details >
            <iframe src={videoSrc} allowFullScreen title='Video player' width="100%" height="500px" />
            <Text>
                <h3>{title}</h3>
                <Desc>{description}</Desc>
            </Text>
        </Details>
    )
}

Video.propTypes = {
    videoId: PropTypes.string
}


export default Video;