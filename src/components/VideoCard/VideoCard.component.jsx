import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styled';
import useVideoInfo from '../../hooks/useVideoInfo';

const VideoCard = ({ videoId }) => {
  const { videoTitle, videoDescription, thumb } = useVideoInfo(videoId);

  return (
    <Styled.Card data-testid="Videocard">
      <Styled.Thumbnail thumb={thumb} />
      <Styled.Text>
        <h3>{videoTitle}</h3>
        <p>{videoDescription}</p>
      </Styled.Text>
    </Styled.Card>
  );
};

VideoCard.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default VideoCard;
