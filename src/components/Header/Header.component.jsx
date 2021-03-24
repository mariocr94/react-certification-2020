import React from  'react';

import {HeaderBox} from './styled';
import Menu from './Menu';
import SearchBar from './SearchBar';
import RightHand from './RightHand';


const Header = (props) => {

    const updateSearch = (childData) => {
        props.callBack(childData);
    }


    return (
        <HeaderBox> 
            <Menu />
            <SearchBar callBack = {updateSearch}/>
            <RightHand />
        </HeaderBox>
    );
};

export default Header;