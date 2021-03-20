import React from 'react';
import styled from 'styled-components';
import VideoCard from './VideoCard';
import {items} from '../../mockFile/mockYoutube.json';

const Cards = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin: 0px auto;
    flex: 1 1 0;
    padding: 20px;
    justify-content: flex-start;
    box-sizing: border-box;
`;

const VideoCards = () => {
    return (
        <>
            <Cards>
                {items.slice(1).map((video) =>
                    <VideoCard key={video.etag} title={video}/>
                )}
                
            </Cards>
        </>
    );

}


export default VideoCards;