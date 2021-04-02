import styled from 'styled-components';

export const Details = styled.div `
    width: 70%;
    align-items: center;
    line-height: 1.5;
`;

export const Text = styled.div `
    width: 100%;
    height: 220px;
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
    display: flex;
    flex-direction: row;
`;

export const Videos = styled.div `
    width: 30%;
    height: 100%;
`;

export const Card = styled.button `
    display: flex;
    width: 100%;
    height: 100px;
    border: 1px solid;
    margin: 10px 0;
    align-items: center;
`;

export const RelTitle = styled.h4 `
    margin-top: 5px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
`;

export const RelDesc = styled.p `
    margin-top: 5px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    overflow: hidden;
`;

export const Img = styled.img `
    margin-left: 0;
    margin-top: 0;
`;

export const Content = styled.div`
    width: 80%;
`;