import React from  'react';

import styled from 'styled-components';

const MenuBox = styled.div `
    align-self: center;
    border-radius: 50%;
    height: 2em;
    width: 2em;
    margin: 10px;
    background-color: purple;
    :hover{
        background-color: grey;
        cursor: pointer;
    }
`;

const MiniBox = styled.div`
    background-color: white;
    align-self: center;
    margin: 0 auto;
    margin-top: ${props => props.space};
    height: 2px;
    width: 1em;
    
`;

const Menu = () => {
    return (
        <MenuBox>
            <MiniBox space="15%"/>
            <MiniBox space="25%"/>
            <MiniBox space="25%"/>
        </MenuBox>
    );
};

export default Menu;