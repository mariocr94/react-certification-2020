import React from  'react';

import styled from 'styled-components';

const MenuBox = styled.div `
    border-radius: 50%;
    margin: 0.2em;
    height: 2em;
    width: 2em;
    background-color: purple;
    :hover{
        background-color: #c628ee;
    }
`;

const MiniBox = styled.div`
    background-color: white;
    height: 2px;
    width: 1em;
    margin: auto;
    margin-top: ${props => props.space};
    align-self: center;
`;

const Menu = () => {
    return (
        <MenuBox>
            <MiniBox space="0.5em"/>
            <MiniBox space="0.2em"/>
            <MiniBox space="0.25em"/>
        </MenuBox>
    );
};

export default Menu;