import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import useVideoInfo from '../../hooks/useVideoInfo';
import Styled from './styled';
import { AppContext } from '../../context/AppProvider';
import FavButton from '../FavButton';

const Video = () => {
  const params = useParams();
  const { videoId } = params;
  const { videoTitle, videoDescription } = useVideoInfo(videoId);
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  const { state } = useContext(AppContext);
  const { isLogged } = state;

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
        {isLogged && <FavButton />}
        <h3>{videoTitle}</h3>
        <Styled.Desc>{videoDescription}</Styled.Desc>
      </Styled.Text>
    </Styled.Details>
  );
};

export default Video;
