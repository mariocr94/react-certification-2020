import React from  'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

import {MenuBox, MiniBox } from '../styled';


const Menu = () => {
    const history = useHistory();

    const reset = () => {
        history.push(`/`);
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