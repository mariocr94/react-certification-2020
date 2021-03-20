import React from 'react';
import styled from 'styled-components';
import VideoCard from './VideoCard';
import {items} from '../../mockFile/mockYoutube.json';

const Cards = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin: 10px auto;
    padding: 20px;
`;

const VideoCards = (props) => {
    const search = props.filter;
    return (
            <Cards>
                {items.slice(1)
                .filter((filterItem) =>
                    filterItem.snippet.title.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim())
                )
                .map((video) =>
                    <VideoCard key={video.etag} title={video}/>
                )}
                
            </Cards>
    );

}


export default VideoCards;