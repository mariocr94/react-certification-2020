import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SmallVideo from '../SmallVideo';
import Styled from './styled';

const SideVideos = ({ videoIds, linkTo }) => {
  const videoArray = videoIds?.map((videoId) => {
    if (videoId === 'undefined') return null;
    return (
      <Link key={videoId} to={`${linkTo}${videoId}`}>
        <SmallVideo key={videoId} videoId={videoId} />
      </Link>
    );
  });

  return <Styled.Videos>{videoArray}</Styled.Videos>;
};

SideVideos.prototype = {
  videoIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  linkTo: PropTypes.string.isRequired,
};

export default SideVideos;
