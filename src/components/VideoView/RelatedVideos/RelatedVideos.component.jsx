import React from 'react';
import useRelatedVideos from '../../../hooks/useRelatedVideos';
import {useParams} from 'react-router-dom';
import RelatedVideo from './RelatedVideo';
import {Videos} from '../styled';



const RelatedVideos = () => {

    let params = useParams();
    const videoId = params.videoId;

    const [isLoading, videos] = useRelatedVideos(videoId);

    return (
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
           
    );
}

export default RelatedVideos;