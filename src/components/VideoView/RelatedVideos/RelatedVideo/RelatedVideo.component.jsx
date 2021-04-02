import React from 'react';
import {Card, RelTitle, RelDesc, Img, Content} from '../../styled';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';




const RelatedVideo = ({id, title, description, thumbnail}) => {

    const history = useHistory();

    const goToVideoPage = () => {
        history.push(`/${id}`);
    }

    const checkProps = (title, description, thumbnail) => {
        if(title === undefined || description === undefined || thumbnail === undefined){
            return false;
        }

        return true;
    }

    return (
        <>
            {checkProps(title, description, thumbnail) ? 
                <Card data-testid="Videocard" onClick={goToVideoPage}>
                    <Img src={thumbnail.medium.url} alt="thumbnail" height="100%" width="20%"/>
                    <Content >
                        <RelTitle>{title}</RelTitle>
                        <RelDesc>{description}</RelDesc>
                    </Content>
                </Card> 
                : <> </>}
        </>
    );
}


RelatedVideo.propTypes ={
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.object,
}

export default RelatedVideo;