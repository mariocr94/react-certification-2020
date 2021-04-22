import styled from 'styled-components';

export const Card = styled.button `
    position: relative;
    text-align: inherit;
    height: 300px;
    width: 320px;
    border-radius: 5px;
    padding: 10;
    margin: 10px auto 10px 20px;
    border: none;
    cursor: pointer;
    overflow: hidden;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.cardColor};
    box-shadow: 5px 5px ${props => props.theme.primaryColor};
    :hover{
        border: 2px solid;
    }
`;

export const Thumbnail = styled.div`
    width: 100%;
    height: 50%;
    background-image: url(${props => props.thumb});
`;

export const Cards = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin: 10px auto;
    padding: 10px;
`;