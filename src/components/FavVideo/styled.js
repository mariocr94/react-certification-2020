import styled from 'styled-components';

const Card = styled.button `
    position: relative;
    text-align: center;
    height: 300px;
    width: 320px;
    border-radius: 5px;
    padding: 10;
    margin: 10px auto 10px 20px;
    border: none;
    cursor: pointer;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.cardColor};
    box-shadow: 5px 5px ${props => props.theme.primaryColor};
    overflow: hidden;
    :hover{
        border: 2px solid;
    }
`

const Thumbnail = styled.div`
    width: 100%;
    height: 50%;
    background-image: url(${props => props.thumb});
`

const Styled = {
    Card,
    Thumbnail
}

export default Styled