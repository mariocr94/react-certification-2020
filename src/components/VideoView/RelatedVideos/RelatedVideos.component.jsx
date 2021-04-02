import React from 'react';
import PropTypes from 'prop-types';
import useRelatedVideos from '../../../hooks/useRelatedVideos';
import RelatedVideo from './RelatedVideo';
import {Videos} from '../styled';



const RelatedVideos = ({videoId, callBack}) => {

    const [isLoading, videos] = useRelatedVideos(videoId);

    const sendData = (data) => {
        callBack(data);
    }

    const cardsArray = videos?.map((video) => 
                                <RelatedVideo 
                                key={video.etag} 
                                id={video.id.videoId}
                                title={video.snippet?.title}
                                description={video.snippet?.description}
                                thumbnail={video.snippet?.thumbnails}
                                callBack={sendData}/>
                            );

    return (
        <>
            <Videos>
                {isLoading ? <p>Loading...</p> : cardsArray}
                
            </Videos>
           
        </>
    );
}

RelatedVideos.propTypes = {
    videoId: PropTypes.string
}

export default RelatedVideos;