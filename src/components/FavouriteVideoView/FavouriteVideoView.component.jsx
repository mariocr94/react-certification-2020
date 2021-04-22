import React from 'react';
import Styled from '../VideoView/styled';
import {useParams} from 'react-router-dom';
import useVideoInfo from '../../hooks/useVideoInfo';
import { useAppContext } from '../../context/AppProvider';
import FavouriteVideos from '../FavouriteVideos/FavouriteVideos.component';

const FavouriteVideoView = () => {
    const params = useParams();
    const videoId = params.videoId;
    const [title, description] = useVideoInfo(videoId);
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;
    const { state, dispatch } = useAppContext();
    const { favourites } = state
    
    const addToFavourites = () => {
        dispatch({type: 'ADD_FAVOURITE', payload: videoId})
    }

    const removeFromFavourites = () => {
        dispatch({type: 'REMOVE_FAVOURITE', payload: videoId})
    }

    const favButton = () => {
        if(favourites.includes(videoId))
            return <Styled.Button onClick={removeFromFavourites}>remove from favourites</Styled.Button>
        
        return <Styled.Button onClick={addToFavourites}>add to favourites</Styled.Button>
    }

    return (
        <Styled.Container >
            <Styled.Details >
                <div style={{position:'relative', paddingTop:'56.25%'}}>
                    <iframe src={videoSrc} title='Video player' frameBorder="0" allowFullScreen
                    style={{position:'absolute', top:'0', left:'0', width:'100%', height:'100%'}} />
                </div>
                <Styled.Text>   
                    {favButton()}
                    <h3>{title}</h3>
                    <Styled.Desc>{description}</Styled.Desc>
                </Styled.Text>
            </Styled.Details>
            <FavouriteVideos />
        </Styled.Container>
        );
}

export default FavouriteVideoView;