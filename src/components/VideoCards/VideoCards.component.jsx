import React from 'react';
import styled from 'styled-components';
import VideoCard from './VideoCard';
import {items} from '../../mockFile/mockYoutube.json';

const Cards = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 20px;
`;

const VideoCards = () => {
    console.log(items)
    return (
        <>
            <Cards>
                <VideoCard />
                <VideoCard />
            </Cards>
        </>
    );

}


export default VideoCards;