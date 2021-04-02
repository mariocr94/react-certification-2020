import React from  'react';

import {HeaderBox} from './styled';
import Menu from './Menu';
import SearchBar from './SearchBar';
import RightHand from './RightHand';
import PropTypes from 'prop-types';


const Header = () => {

    return (
        <HeaderBox> 
            <Menu />
            <SearchBar />
            <RightHand />
        </HeaderBox>
    );
};

Header.propTypes = {
    callBack: PropTypes.func
}

export default Header;