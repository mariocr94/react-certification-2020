import styled from 'styled-components';

const Card = styled.button `
    display: flex;
    border: 1px solid black;
    width: 100%;
    height: 120px;
    margin: 10px;
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

const Content = styled.div`
    width: 80%;
    padding: 0 1em;
`;

const Desc = styled.p `
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    overflow: hidden;
`;

const Title = styled.h4 `
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
`;

const Styled = {
    Card,
    Content,
    Desc,
    Title
}

export default Styled;