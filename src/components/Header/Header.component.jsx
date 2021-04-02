import React from  'react';

import {HeaderBox} from './styled';
import Menu from './Menu';
import SearchBar from './SearchBar';
import RightHand from './RightHand';
import PropTypes from 'prop-types';


const Header = ({callBack, callBackReset}) => {

    const updateSearch = (childData) => {
        callBack(childData);
    }

    const reset = () => {
        callBackReset();
    }

    return (
        <HeaderBox> 
            <Menu callBack = {reset}/>
            <SearchBar callBack = {updateSearch}/>
            <RightHand />
        </HeaderBox>
    );
};

Header.propTypes = {
    callBack: PropTypes.func
}

export default Header;