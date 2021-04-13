import React from 'react';
import {useParams} from 'react-router-dom';
import VideoView from '../../components/VideoView';
import './Video.styles.css';

const VideoPage = () => {
    let params = useParams();
    return (
        <section className="videopage">
            <VideoView videoId={params.videoId}/>
        </section>
    );

}

export default VideoPage;