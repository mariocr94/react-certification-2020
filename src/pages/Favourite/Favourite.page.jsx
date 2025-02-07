import React from 'react';
import VideoCards from '../../components/VideoCards';
import './Favourite.styles.css';
import { useAppContext } from '../../context/AppProvider';

const FavouritePage = () => {
  const { state } = useAppContext();
  const { favourites } = state;

  return (
    <section className="favouritepage">
      {favourites.length > 0 ? (
        <VideoCards videoIds={favourites} linkTo="/favourites/" />
      ) : (
        <h2>There are no favourite videos!</h2>
      )}
    </section>
  );
};

export default FavouritePage;
