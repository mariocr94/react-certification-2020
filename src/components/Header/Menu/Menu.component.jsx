import React from  'react';
import PropTypes from 'prop-types';

import {MenuBox, MiniBox } from '../styled';


const Menu = ({callBack}) => {

    const reset = () => {
        callBack()
    }

    return (
        <MenuBox onClick={reset}>
            <MiniBox space="15%"/>
            <MiniBox space="25%"/>
            <MiniBox space="25%"/>
        </MenuBox>
    );
};

Menu.propTypes = {
    callBack: PropTypes.func
}


export default Menu;