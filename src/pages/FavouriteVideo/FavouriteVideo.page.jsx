import React from 'react';
import Video from '../../components/Video';
import SideVideos from '../../components/SideVideos';
import './FavouriteVideo.styles.css';
import Styled from './styled';
import { useAppContext } from '../../context/AppProvider';

const FavouritePage = () => {
  const { state } = useAppContext();
  const { favourites } = state;

  return (
    <section className="favouritevideopage">
      <Styled.Container>
        <Video />
        <SideVideos videoIds={favourites} linkTo="/favourites/" />
      </Styled.Container>
    </section>
  );
};

export default FavouritePage;
