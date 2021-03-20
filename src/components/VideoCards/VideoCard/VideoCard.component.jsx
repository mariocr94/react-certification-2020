import React from 'react';
import styled from 'styled-components';

const Card = styled.button `
    position: relative;
    display: block;
    text-align: inherit;
    height: 300px;
    width: 320px;
    background-color: white;
    border-radius: 5px;
    border: 0;
    padding: 0;
    margin: 10px auto;
    border: none;
    cursor: pointer;
    justify-content: center;
    box-sizing: inherit;
`;

const Thumbnail = styled.div`
    width: 100%;
    height: 50%;
    background-image: url(${props => props.thumb});
`;


const VideoCard = (data) => {
    const videoTitle = data.title.snippet.title
    const description = data.title.snippet.description
    const thumbnail = data.title.snippet.thumbnails.medium.url

    return (
        <>
            <Card>
                <Thumbnail thumb={thumbnail} />
                <h3>{videoTitle}</h3>
                {description}
            </Card>
        </>
    );
}

export default VideoCard;