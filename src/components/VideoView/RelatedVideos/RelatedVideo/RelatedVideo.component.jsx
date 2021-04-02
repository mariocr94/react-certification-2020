import React, {useState} from 'react';
import {Card, RelTitle, RelDesc, Img, Content} from '../../styled';
import PropTypes from 'prop-types';




const RelatedVideo = ({id, title, description, thumbnail, callBack}) => {
    const [verified, setVerified] = useState(true);

    const sendData = () => {
        callBack(id);
    }

    if(typeof(title) === 'undefined' || typeof(description) === 'undefined' || typeof(thumbnail) === 'undefined'){
        setVerified(false)
    }

    return (
        <>
        {verified ? 
            <Card data-testid="Videocard" onClick={sendData}>
                <Img src={thumbnail.medium.url} alt="thumbnail" height="100%" width="20%"/>
                <Content >
                    <RelTitle>{title}</RelTitle>
                    <RelDesc>{description}</RelDesc>
                </Content>
            </Card> 
            : <></>}
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