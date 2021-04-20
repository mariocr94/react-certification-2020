import React from 'react';
import {useParams} from 'react-router-dom';
import useVideoInfo from '../../../hooks/useVideoInfo';
import {Details, Text, Desc} from '../styled';

const Video = () => {
    const params = useParams();
    const videoId = params.videoId;
    const [title, description] = useVideoInfo(videoId);
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;

    return (
        <Details >
            <div style={{position:'relative', paddingTop:'56.25%'}}>
                <iframe src={videoSrc} title='Video player' frameBorder="0" allowFullScreen
                style={{position:'absolute', top:'0', left:'0', width:'100%', height:'100%'}} />
            </div>
            <Text>
                <h3>{title}</h3>
                <Desc>{description}</Desc>
            </Text>
        </Details>
    )
}



export default Video;