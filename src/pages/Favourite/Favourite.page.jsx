import React from 'react';
import VideoCards from '../../components/VideoCards';
import './Favourite.styles.css';
import { useAppContext } from '../../context/AppProvider';

const FavouritePage = () => {
  const { state } = useAppContext();
  const { favourites } = state;

  return (
    <section className="favouritepage">
      <VideoCards videoIds={favourites} linkTo="/favourites/" />
    </section>
  );
};

export default FavouritePage;
