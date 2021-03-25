import React from 'react';
import {Thumbnail, Card} from '../styled';
import PropTypes from 'prop-types';




const VideoCard = ({title, description, thumbnail}) => {

    return (
        <>
            <Card data-testid="Videocard">
                <Thumbnail thumb={thumbnail.medium.url} />
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </Card>
        </>
    );
}


VideoCard.propTypes ={
    title: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.object
}

export default VideoCard;