import React from 'react';
import Styled from './styled';
import PropTypes from 'prop-types';
import useVideoInfo from '../../hooks/useVideoInfo';

const SmallVideo = ({videoId}) => {
    const [title, description, thumb] = useVideoInfo(videoId);

    if (title === '' ) return null;

    return (
        <Styled.Card data-testid="Videocard">
            <img src={thumb} alt="thumbnail" height="100%" width="30%"/>
            <Styled.Content >
                <Styled.Title>{title}</Styled.Title>
                <Styled.Desc>{description}</Styled.Desc>
            </Styled.Content>
        </Styled.Card> 
    );
}

SmallVideo.propTypes ={
    id: PropTypes.string.isRequired,
}

export default SmallVideo;