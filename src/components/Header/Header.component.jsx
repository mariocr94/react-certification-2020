import React from  'react';

import {HeaderBox} from './styled';
import Menu from './Menu';
import SearchBar from './SearchBar';
import RightHand from './RightHand';


const Header = () => {

    return (
        <HeaderBox> 
            <Menu />
            <SearchBar />
            <RightHand />
        </HeaderBox>
    );
};


export default Header;