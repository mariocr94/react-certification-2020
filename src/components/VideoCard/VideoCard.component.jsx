import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styled';
import useVideoInfo from '../../hooks/useVideoInfo';

const VideoCard = ({ videoId }) => {
  const [title, description, thumb] = useVideoInfo(videoId);

  return (
    <Styled.Card data-testid="Videocard">
      <Styled.Thumbnail thumb={thumb} />
      <Styled.Text>
        <h3>{title}</h3>
        <p>{description}</p>
      </Styled.Text>
    </Styled.Card>
  );
};

VideoCard.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default VideoCard;
