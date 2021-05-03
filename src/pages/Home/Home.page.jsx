import React, { useRef } from 'react';
import VideoCards from '../../components/VideoCards';
import './Home.styles.css';
import { useAppContext } from '../../context/AppProvider';
import useYoutubeApi from '../../hooks/useYoutubeApi';

function HomePage() {
  const { state } = useAppContext();
  const { search } = state;
  const searchVideos = useYoutubeApi(search);
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      {search === '' ? (
        <h2>Look for something!</h2>
      ) : (
        <VideoCards videoIds={searchVideos} linkTo="/" />
      )}
    </section>
  );
}

export default HomePage;
