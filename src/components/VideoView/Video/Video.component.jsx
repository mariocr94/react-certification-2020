import React from 'react';
import {useParams} from 'react-router-dom';
import useVideoInfo from '../../../hooks/useVideoInfo';
import {Details, Text, Desc, Favourite} from '../styled';
import { useAppContext } from '../../../context/AppProvider';

const Video = () => {
    const params = useParams();
    const videoId = params.videoId;
    const [title, description] = useVideoInfo(videoId);
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;
    const { state, dispatch } = useAppContext();
    const { isLogged, favourites } = state

    const addToFavourites = () => {
        dispatch({type: 'ADD_FAVOURITE', payload: videoId})
    }

    const removeFromFavourites = () => {
        dispatch({type: 'REMOVE_FAVOURITE', payload: videoId})
    }

    const favButton = () => {
        console.log(favourites);
        if (!favourites) return
        if(favourites.includes(videoId))
            return <Favourite onClick={removeFromFavourites}>remove from favourites</Favourite>
        
        return <Favourite onClick={addToFavourites}>add to favourites</Favourite>
    }

    return (
        <Details >
            <div style={{position:'relative', paddingTop:'56.25%'}}>
                <iframe src={videoSrc} title='Video player' frameBorder="0" allowFullScreen
                style={{position:'absolute', top:'0', left:'0', width:'100%', height:'100%'}} />
            </div>
            <Text>   
                {isLogged && favButton()}
                <h3>{title}</h3>
                <Desc>{description}</Desc>
            </Text>
        </Details>
    )
}



export default Video;