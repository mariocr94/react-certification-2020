import React from 'react';
import './Video.styles.css';
import { useParams } from 'react-router-dom';
import Video from '../../components/Video';
import SideVideos from '../../components/SideVideos';
import Styled from './styled';
import useRelatedVideos from '../../hooks/useRelatedVideos';

const VideoPage = () => {
  const params = useParams();
  const { videoId } = params;
  const [isLoading, videos] = useRelatedVideos(videoId);

  const getVideos = () => {
    const videoIds = videos?.map((video) => video.id.videoId);
    return <SideVideos videoIds={videoIds} linkTo="/" />;
  };

  return (
    <section className="videopage">
      <Styled.Container>
        <Video />
        {isLoading ? <p>Loading...</p> : getVideos()}
      </Styled.Container>
    </section>
  );
};

export default VideoPage;
