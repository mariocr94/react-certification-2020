import React, { useRef } from 'react';
import VideoCards from '../../components/VideoCards';
import './Home.styles.css';
import { useAppContext } from '../../context/AppProvider';
import useYoutubeApi from '../../hooks/useYoutubeApi';

function HomePage() {
  const { state } = useAppContext();
  const { search } = state;
  const [searchVideos] = useYoutubeApi(search);

  const searchIds = searchVideos?.map((video) => video.id.videoId);
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      {search === '' ? (
        <h2>Look for something!</h2>
      ) : (
        <VideoCards videoIds={searchIds} linkTo="/" />
      )}
    </section>
  );
}

export default HomePage;
