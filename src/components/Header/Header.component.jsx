import React from  'react';

import {HeaderBox} from './styled';
import Menu from './Menu';
import SearchBar from './SearchBar';
import RightHand from './RightHand';
import PropTypes from 'prop-types';


const Header = ({callBack}) => {

    const updateSearch = (childData) => {
        callBack(childData);
    }


    return (
        <HeaderBox> 
            <Menu />
            <SearchBar callBack = {updateSearch}/>
            <RightHand />
        </HeaderBox>
    );
};

Header.propTypes = {
    callBack: PropTypes.func
}

export default Header;