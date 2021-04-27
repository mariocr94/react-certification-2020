import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import useVideoInfo from '../../hooks/useVideoInfo';
import Styled from './styled';
import { AppContext } from '../../context/AppProvider';

const Video = () => {
  const params = useParams();
  const { videoId } = params;
  const [title, description] = useVideoInfo(videoId);
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  const { state, dispatch } = useContext(AppContext);
  const { isLogged, favourites } = state;

  const addToFavourites = () => {
    dispatch({ type: 'ADD_FAVOURITE', payload: videoId });
  };

  const removeFromFavourites = () => {
    dispatch({ type: 'REMOVE_FAVOURITE', payload: videoId });
  };

  const favButton = () => {
    if (favourites.includes(videoId))
      return (
        <Styled.Button onClick={removeFromFavourites} data-testid="remFavButton">
          remove from favourites
        </Styled.Button>
      );

    return (
      <Styled.Button onClick={addToFavourites} data-testid="FavButton">
        add to favourites
      </Styled.Button>
    );
  };
  return (
    <Styled.Details data-testid="VideoInfo">
      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <iframe
          src={videoSrc}
          title="Video player"
          frameBorder="0"
          allowFullScreen
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      <Styled.Text>
        {isLogged && favButton()}
        <h3>{title}</h3>
        <Styled.Desc>{description}</Styled.Desc>
      </Styled.Text>
    </Styled.Details>
  );
};

export default Video;
