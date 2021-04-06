import styled from 'styled-components';


export const Card = styled.button `
    position: relative;
    text-align: inherit;
    height: 300px;
    width: 320px;
    background-color: white;
    border-radius: 5px;
    padding: 10;
    margin: 10px auto 10px 20px;
    border: none;
    cursor: pointer;
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