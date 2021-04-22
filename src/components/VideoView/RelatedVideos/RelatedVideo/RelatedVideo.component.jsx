import React from 'react';
import {Card, RelTitle, RelDesc, Img, Content} from '../../styled';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

const RelatedVideo = ({id, title, description, thumbnail}) => {

    const history = useHistory();

    const goToVideoPage = () => {
        history.push(`/${id}`);
    }

    if (!title || !description || !thumbnail || title==='Título default') return null;

    return (
        <Card data-testid="Videocard" onClick={goToVideoPage}>
            <Img src={thumbnail.medium.url} alt="thumbnail" height="100%" width="20%"/>
            <Content >
                <RelTitle>{title}</RelTitle>
                <RelDesc>{description}</RelDesc>
            </Content>
        </Card> 
    );
}


RelatedVideo.propTypes ={
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.object,
}

RelatedVideo.defaultProps = {
    title: 'Título default',
    description: 'Descripción default',
    thumbnail: {
        medium:{
            url: 'https://jenmulligandesign.com/wp-content/uploads/2017/04/stockvault-surfer-at-sunset-free-stock-photos.jpg'
        }
    }
}

export default RelatedVideo;