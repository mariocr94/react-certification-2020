import React from 'react';
import PropTypes from 'prop-types';
import useRelatedVideos from '../../../hooks/useRelatedVideos';
import RelatedVideo from './RelatedVideo';
import {Videos} from '../styled';



const RelatedVideos = ({videoId}) => {

    const [isLoading, videos] = useRelatedVideos(videoId);

    return (
        <>
            <Videos>
                {isLoading ? <p>Loading...</p> : 
                (
                    videos?.map((video) => 
                                <RelatedVideo 
                                key={video.etag} 
                                id={video.id.videoId}
                                title={video.snippet?.title}
                                description={video.snippet?.description}
                                thumbnail={video.snippet?.thumbnails}/>
                            )
                )}
                
                
            </Videos>
           
        </>
    );
}

RelatedVideos.propTypes = {
    videoId: PropTypes.string
}

export default RelatedVideos;