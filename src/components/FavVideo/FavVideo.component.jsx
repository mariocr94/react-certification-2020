import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styled';
import useVideoInfo from '../../hooks/useVideoInfo';

const FavVideo = ({videoId}) => {
    const [title, description, thumb] = useVideoInfo(videoId);
    return ( 
        <Styled.Card data-testid="Videocard">
            <Styled.Thumbnail thumb={thumb} />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </Styled.Card>
    );
}

FavVideo.propTypes = {
    videoId: PropTypes.string.isRequired
}

export default FavVideo;

