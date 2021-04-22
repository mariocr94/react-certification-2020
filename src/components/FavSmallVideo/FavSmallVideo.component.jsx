import React from 'react';
import Styled from '../VideoView/styled';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import useVideoInfo from '../../hooks/useVideoInfo';

const FavSmallVideo = ({videoId}) => {
    const [title, description, thumb] = useVideoInfo(videoId);


    const history = useHistory();

    const goToVideoPage = () => {
        history.push(`/favourites/${videoId}`);
    }

    return (
        <Styled.Card data-testid="Videocard" onClick={goToVideoPage}>
            <Styled.Img src={thumb} alt="thumbnail" height="100%" width="20%"/>
            <Styled.Content >
                <Styled.RelTitle>{title}</Styled.RelTitle>
                <Styled.RelDesc>{description}</Styled.RelDesc>
            </Styled.Content>
        </Styled.Card> 
    );
}

FavSmallVideo.propTypes ={
    id: PropTypes.string.isRequired,
}

export default FavSmallVideo;