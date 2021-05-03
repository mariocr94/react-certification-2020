import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppProvider';
import Styled from './styled';

const FavButton = () => {
  const [addRemove, setAddRemove] = useState();
  const { state, dispatch } = useContext(AppContext);
  const { favourites } = state;
  const params = useParams();
  const { videoId } = params;

  const handleClick = () => {
    if (favourites.includes(videoId)) {
      dispatch({ type: 'REMOVE_FAVOURITE', payload: videoId });
    } else {
      dispatch({ type: 'ADD_FAVOURITE', payload: videoId });
    }
  };

  useEffect(() => {
    if (favourites.includes(videoId)) {
      setAddRemove('Remove from favourites');
    } else {
      setAddRemove('Add to favourites');
    }
  }, [favourites, videoId]);

  return (
    <>
      <Styled.Button onClick={handleClick} data-testid="FavButton">
        {addRemove}
      </Styled.Button>
    </>
  );
};

export default FavButton;
