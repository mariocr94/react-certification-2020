import React from 'react';
import {Thumbnail, Card} from '../styled';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';




const VideoCard = ({id, title, description, thumbnail}) => {
    const history = useHistory();

    const goToVideoPage = () => {
        history.push(`/${id}`);
    }

    return (
        <Card data-testid="Videocard" onClick={goToVideoPage}>
            <Thumbnail thumb={thumbnail.medium.url} />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </Card>
    );
}


VideoCard.propTypes ={
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.object
}

VideoCard.defaultProps = {
    title: 'Título Default',
    description: 'Descripción Default', 
    thumbnail: null,
}

export default VideoCard;