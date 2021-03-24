import React from  'react';

import {MenuBox, MiniBox } from '../styled';


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