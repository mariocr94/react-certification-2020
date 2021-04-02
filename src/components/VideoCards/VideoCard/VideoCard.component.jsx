import React from 'react';
import {Thumbnail, Card} from '../styled';
import PropTypes from 'prop-types';




const VideoCard = ({id, title, description, thumbnail, callBack}) => {
    const sendData = () => {
        callBack(id)
    }

    return (
        <>
            <Card data-testid="Videocard" onClick={sendData}>
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
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.object,
    callBack: PropTypes.func
}

export default VideoCard;