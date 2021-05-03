import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styled';
import useVideoInfo from '../../hooks/useVideoInfo';

const SmallVideo = ({ videoId }) => {
  const { videoTitle, videoDescription, thumb } = useVideoInfo(videoId);

  if (videoTitle === '') return null;

  return (
    <Styled.Card data-testid="SmallVideocard">
      <img src={thumb} alt="thumbnail" height="100%" width="30%" />
      <Styled.Content>
        <Styled.Title>{videoTitle}</Styled.Title>
        <Styled.Desc>{videoDescription}</Styled.Desc>
      </Styled.Content>
    </Styled.Card>
  );
};

SmallVideo.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default SmallVideo;
