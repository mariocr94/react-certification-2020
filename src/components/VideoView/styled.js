import styled from 'styled-components';

export const Details = styled.div `
    align-items: center;
    line-height: 1.5;
    @media (min-width: 900px){
        width: 70%;
    }
`;

export const Text = styled.div `
    width: 100%;
    height: auto;
`;

export const Desc = styled.p `
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    overflow: hidden;
`;

export const Container = styled.div `
    width: 100%;
    height: 100%;
    padding: 1em;
    gap: 1em;
    @media (min-width: 900px){
        display: flex;
    }
`;

export const Videos = styled.div `
    
    height: 100%;
    @media (min-width: 900px){
        width: 30%;
    }
`;

export const Card = styled.button `
    display: flex;
    border: 1px solid black;
    width: 100%;
    height: 100px;
    margin: 10px 0;
    align-items: center;
    border-radius: 5px;
    color: ${props => props.theme.textColor};
    box-shadow: 2px 2px ${props => props.theme.primaryColor};
    background-color: ${props => props.theme.foregroundColor};
    :hover{
        border: 2px solid ${props => props.theme.textColor};
        cursor: pointer;
    }
`;

export const RelTitle = styled.h4 `
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
`;

export const RelDesc = styled.p `
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    overflow: hidden;
`;

export const Img = styled.img `
`;

export const Content = styled.div`
    width: 80%;
    padding: 0 1em;
`;