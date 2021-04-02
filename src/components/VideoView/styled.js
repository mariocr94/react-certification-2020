import styled from 'styled-components';

export const Details = styled.div `
    width: 80%;
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